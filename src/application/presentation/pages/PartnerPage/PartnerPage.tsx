import { Partner } from 'application/domain/entities/partners/Partner'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { fetchPartner } from 'application/domain/useCases/partners/getPartners'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaPartnerPage } from 'application/presentation/meta/MetaContent'
import React from 'react'
import s from './PartnerPage.module.scss'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'
import ArticlesBlock from './components/ArticlesBlock'

export const getPartnerPageServerSideProps = async ({ params }: GetServerSideDefaultProps) => {
  try {
    const partner = await fetchPartner(parseInt(params?.id as string, 10))
    return {
      props: {
        partner,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type PartnersPageProps = {
  partner: Partner
}

export default function PartnerPage({ partner }: PartnersPageProps) {
  return (
    <>
      <MetaPartnerPage partner={partner} />
      <PageLayout
        withBackButton
        breadCrumbs={[
          { id: 1, name: 'Партнеры', link: '/partners' },
          { id: 2, name: partner.name },
        ]}
      >
        <div className={s.container}>
          <div className={s.image}>
            <StoredImage
              src={partner.photo || ''}
              alt={`Логотип ${partner.name}`}
              width={600}
              height={300}
            />
          </div>
          <div className={s.text} dangerouslySetInnerHTML={{ __html: partner.description || '' }} />
          <div className={s.articles_container}>
            {partner.articles && partner.articles.length && (
              <ArticlesBlock articles={partner.articles} type="articles" />
            )}
            {partner.videos && partner.videos.length && (
              <ArticlesBlock articles={partner.videos} type="videos" />
            )}
          </div>
        </div>
      </PageLayout>
    </>
  )
}

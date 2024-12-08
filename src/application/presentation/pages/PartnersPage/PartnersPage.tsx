import { Partners } from 'application/domain/entities/partners/Partner'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { fetchPartners } from 'application/domain/useCases/partners/getPartners'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaPartnersPage } from 'application/presentation/meta/MetaContent'
import React from 'react'
import s from './PartnersPage.module.scss'
import PartnerCard from 'application/presentation/components/PartnerCard'

export const getPartnersPageServerSideProps = async ({ params }: GetServerSideDefaultProps) => {
  const partners = await fetchPartners()
  return {
    props: {
      partners,
    },
  }
}

type PartnersPageProps = {
  partners: Partners
}

export default function PartnersPage({ partners }: PartnersPageProps) {
  return (
    <>
      <MetaPartnersPage />
      <PageLayout
        title="Партнеры"
        breadCrumbs={[
          { id: 1, name: 'Главная', link: '/' },
          { id: 2, name: 'Партнеры' },
        ]}
      >
        <div className={s.container}>
          {partners.map(item => (
            <PartnerCard key={`partner_item_${item.id}`} partner={item} />
          ))}
        </div>
      </PageLayout>
    </>
  )
}

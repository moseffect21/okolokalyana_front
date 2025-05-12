import React from 'react'
import s from './LinksPage.module.scss'
import Image from 'next/image'
import vladPng from 'images/Vlad.png'
import PartnerItem from './components/PartnerItem'
import { MetaData } from 'application/presentation/meta/MetaContent'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { fetchLinks } from 'application/data/api/links'
import { LinksCategory as LinksCategoryType } from 'application/domain/entities/links/LinksCategory'
import { fetchPartners } from 'application/domain/useCases/partners/getPartners'
import { Partner } from 'application/domain/entities/partners/Partner'
import pickParamsFromObject from 'application/domain/utils/pickParamsFromObject'
import LinksCategory from 'application/presentation/components/TapLinkCategory'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'

const QR_CATEGORY_ID = 6

export async function getLinksPageServerSideProps({ resolvedUrl }: GetServerSideDefaultProps) {
  const isQrLinks = resolvedUrl === '/links/qr'
  try {
    const linksResponse = await fetchLinks()
    const partnersResponse = await fetchPartners()

    let links = Object.values(linksResponse).filter(linksCategory =>
      isQrLinks ? linksCategory.id === QR_CATEGORY_ID : linksCategory.id !== QR_CATEGORY_ID,
    )
    const partners = isQrLinks
      ? []
      : partnersResponse.map(partner => pickParamsFromObject(partner, ['id', 'name', 'photo']))

    return {
      props: {
        links,
        partners,
        isQrLinks,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type LinksPageProps = {
  links: LinksCategoryType[]
  partners: Partner[]
  isQrLinks: boolean
}

export default function LinksPage({ links, partners, isQrLinks }: LinksPageProps) {
  const breadcrumbs = [
    { id: 1, name: 'Главная', link: '/' },
    { id: 2, name: 'Taplink' },
  ]
  return (
    <>
      <MetaData
        title={'Все медиа площадки Влада Носачёва «ОКОЛОКАЛЬЯНА»'}
        desc="Тут вы найдёте все блоги, страницы, соц сети Влада Носачёва и проекта ОКОЛОКАЛЬЯНА."
        keywords="влад носачёв, околокальяна, соц сети, сайт, инстаграм, телеграм, ютуб, лайв, вконтакте, тик ток, твич, донат, вайлберис, озон, стрим, прямой эфир, онлайн, написать, связаться, контакты, инста, instagram, тг, telegram, телега, youtube, ютюб, вк, vkontakte, страница, группа, паблик, tik tok, тт, twitch, donations, вб, wildberries, ozon, менеджер, связь"
      />
      <PageLayout breadCrumbs={breadcrumbs}>
        <div className={s.container}>
          <div className={s.heading}>
            <div className={s.img_container}>
              <Image src={vladPng} alt="" />
            </div>
            <div className={s.info}>
              <div className={s.title}>Влад Носачев</div>
              <div className={s.subtitle}>ОКОЛОКАЛЬЯНА</div>
            </div>
          </div>
          <div className={s.separator}></div>

          <div className={s.links_container}>
            {links.map(linkCategory => (
              <React.Fragment key={`link_category_${linkCategory.id}`}>
                <LinksCategory
                  title={linkCategory.name}
                  data={linkCategory.links}
                  isTitleHidden={isQrLinks}
                />
                <div className={s.separator}></div>
              </React.Fragment>
            ))}
          </div>

          {!!partners.length && (
            <div className={s.partners_block}>
              <div className={s.title}>Партнеры проекта</div>
              <div className={s.partners_container}>
                {partners.map(partner => (
                  <PartnerItem key={`partner_${partner.id}`} partner={partner} />
                ))}
              </div>
            </div>
          )}
        </div>
      </PageLayout>
    </>
  )
}

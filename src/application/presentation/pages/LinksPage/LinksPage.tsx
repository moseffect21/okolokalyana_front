import React from 'react'
import s from './LinksPage.module.scss'
import Image from 'next/image'
import vladPng from 'images/Vlad.png'
import LinksContainer from './components/LinksContainer'
import PartnerItem from './components/PartnerItem'
import { MetaData } from 'application/presentation/meta/MetaContent'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { fetchLinks } from 'application/data/api/links'
import { LinksCategory } from 'application/domain/entities/links/LinksCategory'
import { fetchPartners } from 'application/domain/useCases/partners/getPartners'
import { Partner } from 'application/domain/entities/partners/Partner'
import pickParamsFromObject from 'application/domain/utils/pickParamsFromObject'

export async function getLinksPageServerSideProps() {
  try {
    const linksResponse = await fetchLinks()
    const partnersResponse = await fetchPartners()

    const links = Object.values(linksResponse)
    const partners = partnersResponse.map(partner =>
      pickParamsFromObject(partner, ['id', 'name', 'photo']),
    )

    return {
      props: {
        links,
        partners,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type LinksPageProps = {
  links: LinksCategory[]
  partners: Partner[]
}

export default function LinksPage({ links, partners }: LinksPageProps) {
  return (
    <>
      <MetaData
        title={'Все медиа площадки Влада Носачёва «ОКОЛОКАЛЬЯНА»'}
        desc="Тут вы найдёте все блоги, страницы, соц сети Влада Носачёва и проекта ОКОЛОКАЛЬЯНА."
        keywords="влад носачёв, околокальяна, соц сети, сайт, инстаграм, телеграм, ютуб, лайв, вконтакте, тик ток, твич, донат, вайлберис, озон, стрим, прямой эфир, онлайн, написать, связаться, контакты, инста, instagram, тг, telegram, телега, youtube, ютюб, вк, vkontakte, страница, группа, паблик, tik tok, тт, twitch, donations, вб, wildberries, ozon, менеджер, связь"
      />
      <PageLayout>
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
                <LinksContainer title={linkCategory.name} data={linkCategory.links} />
                <div className={s.separator}></div>
              </React.Fragment>
            ))}
          </div>

          <div className={s.partners_block}>
            <div className={s.title}>Партнеры проекта</div>
            <div className={s.partners_container}>
              {partners.map(partner => (
                <PartnerItem key={`partner_${partner.id}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

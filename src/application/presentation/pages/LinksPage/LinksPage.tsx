import React from 'react'
import s from './LinksPage.module.scss'
import Image from 'next/image'
import vladPng from 'images/Vlad.png'
import LinksContainer from './components/LinksContainer'
import { linksData, partnersData } from './linksPageData'
import PartnerItem from './components/PartnerItem'
import Link from 'next/link'
import { MetaData } from 'application/presentation/meta/MetaContent'

export async function getLinksStaticProps() {
  return {
    props: {},
  }
}

export default function LinksPage() {
  return (
    <>
      <MetaData
        title={'Все медиа площадки Влада Носачёва «ОКОЛОКАЛЬЯНА»'}
        desc="Тут вы найдёте все блоги, страницы, соц сети Влада Носачёва и проекта ОКОЛОКАЛЬЯНА."
        keywords="влад носачёв, околокальяна, соц сети, сайт, инстаграм, телеграм, ютуб, лайв, вконтакте, тик ток, твич, донат, вайлберис, озон, стрим, прямой эфир, онлайн, написать, связаться, контакты, инста, instagram, тг, telegram, телега, youtube, ютюб, вк, vkontakte, страница, группа, паблик, tik tok, тт, twitch, donations, вб, wildberries, ozon, менеджер, связь"
      />
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.img_container}>
            <Image src={vladPng} alt="" />
          </div>
          <div className={s.title}>Влад Носачев</div>
          <div className={s.subtitle}>ОКОЛОКАЛЬЯНА</div>
          <div className={s.separator}></div>

          <LinksContainer title="ОКОЛОКАЛЬЯНА везде" data={linksData.all} />
          <div className={s.separator}></div>

          <LinksContainer title="Личные проекты автора" data={linksData.personal} />
          <div className={s.separator}></div>

          <LinksContainer
            title="Вы всегда можете поддержать автора и проект"
            data={linksData.support}
          />
          <div className={s.separator}></div>

          <div className={s.partners_block}>
            <div className={s.title}>ТОП бренды индустрии, респект за поддержку.</div>
            <div className={s.partners_container}>
              {partnersData.map(item => (
                <PartnerItem key={`partner_${item.id}`} data={item} />
              ))}
            </div>
          </div>
          <Link href="https://t.me/okolomanager" className={s.manager_link}>
            Менеджер по всем вопросам
            <br />
            <span>@okolomanager</span>
          </Link>
        </div>
      </div>
    </>
  )
}

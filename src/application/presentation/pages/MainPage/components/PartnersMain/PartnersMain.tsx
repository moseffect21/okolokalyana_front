import React from 'react'
import s from './PartnersMain.module.scss'
import { Partners } from 'application/domain/entities/partners/Partner'
import PartnerCard from 'application/presentation/pages/PartnersPage/components/PartnerCard'
import ShowMoreLink from 'application/presentation/components/uiComponents/ShowMoreLink'

type PartnersMainProps = {
  partners: Partners
}

const PartnersMain = ({ partners }: PartnersMainProps) => {
  return (
    <section className={s.container}>
      <div className={s.partnersMainInner}>
        <div className={s.titleText}>Партнеры</div>
        <div className={s.partnersMainContainer}>
          {partners.map(item => (
            <PartnerCard key={`partner_item_${item.id}`} partner={item} />
          ))}
        </div>
        <ShowMoreLink href='/partners' color='white'/>
      </div>
    </section>
  )
}

export default PartnersMain

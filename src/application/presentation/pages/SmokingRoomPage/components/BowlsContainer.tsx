import { Bowl } from 'application/domain/entities/bowl/Bowl'
import React from 'react'
import Link from 'next/link'
import LinkSvg from 'images/icons/gray_right_arrow.svg'
import s from './Containers.module.scss'
import Cards from 'application/presentation/components/uiComponents/Cards'

type BowlsContainerProps = {
  bowls: Bowl[]
  total: number
}

const BowlsContainer = ({ bowls, total }: BowlsContainerProps) => {
  const totalCount = total - bowls.length
  return (
    <div className={s.container}>
      <div className={s.title}>Чаша</div>
      <Cards data={bowls} cardLinkPrefix="/smokingroom/list?bowl=" />
      <Link className={s.show_more} href="/smokingroom#bowls">
        Показать еще {totalCount || null}
        <LinkSvg />
      </Link>
    </div>
  )
}

export default BowlsContainer

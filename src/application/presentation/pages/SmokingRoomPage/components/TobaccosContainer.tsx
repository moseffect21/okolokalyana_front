import { Tobacco } from 'application/domain/entities/tobacco/Tobacco'
import Chips from 'application/presentation/components/uiComponents/Chips'
import React from 'react'
import s from './Containers.module.scss'
import Link from 'next/link'
import LinkSvg from 'images/icons/gray_right_arrow.svg'
import { ChipsItem } from 'application/presentation/components/uiComponents/Chips/Chips'

type TobaccosContainerProps = {
  tobaccos: Tobacco[]
  total: number
}
const TobaccosContainer = ({ tobaccos, total }: TobaccosContainerProps) => {
  const tobaccosChips: ChipsItem[] = tobaccos.map(item => ({
    id: item.id,
    name: item.name,
    href: `/smokingroom/list?tobacco=${item.slug || item.id}`,
  }))
  const totalCount = total - tobaccos.length
  return (
    <div className={s.container}>
      <div className={s.title}>Табак</div>
      <Chips data={tobaccosChips} />
      <Link className={s.show_more} href="/smokingroom#tobaccos">
        Показать еще {totalCount || null}
        <LinkSvg />
      </Link>
    </div>
  )
}

export default TobaccosContainer

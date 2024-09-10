import { Bowl } from 'application/domain/entities/bowl/Bowl'
import React from 'react'
import Link from 'next/link'
import LinkSvg from 'images/icons/gray_right_arrow.svg'
import s from './Containers.module.scss'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'

type BowlItemProps = {
  bowl: Bowl
}

const BowlItem = ({ bowl }: BowlItemProps) => {
  return (
    <Link className={s.bowl} href={`/showroom/list?bowl=${bowl.slug || bowl.id}`}>
      <div className={s.photo_container}>
        <StoredImage src={bowl.photo} alt="" width={200} height={200} className={s.photo} />
      </div>
      <div className={s.name}>
        <div>{bowl.name}</div>
      </div>
    </Link>
  )
}

type BowlsContainerProps = {
  bowls: Bowl[]
  total: number
}

const BowlsContainer = ({ bowls, total }: BowlsContainerProps) => {
  const totalCount = total - bowls.length
  return (
    <div className={s.container}>
      <div className={s.title}>Чаша</div>
      <div className={s.bowls}>
        {bowls.map(bowl => (
          <BowlItem key={`bowl_${bowl.id}`} bowl={bowl} />
        ))}
      </div>
      <Link className={s.show_more} href="/smokingroom#bowls">
        Показать еще {totalCount || null}
        <LinkSvg />
      </Link>
    </div>
  )
}

export default BowlsContainer

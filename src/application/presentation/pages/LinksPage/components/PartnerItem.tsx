import React from 'react'
import s from './PartnerItem.module.scss'
import Link from 'next/link'
import { Partner } from 'application/domain/entities/partners/Partner'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'

type Props = {
  partner: Partner
}

const PartnerItem = ({ partner }: Props) => {
  const url = `/partners/${partner.id}`
  return (
    <Link className={s.container} href={url}>
      <StoredImage
        src={partner.photo || ''}
        alt={partner.name}
        width={300}
        height={150}
        className={s.image}
      />
    </Link>
  )
}

export default PartnerItem

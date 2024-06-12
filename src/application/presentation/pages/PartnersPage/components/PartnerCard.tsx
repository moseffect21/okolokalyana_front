import { Partner } from 'application/domain/entities/partners/Partner'
import Link from 'next/link'
import React from 'react'
import s from './PartnerCard.module.scss'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'

type PartnerCardProps = {
  partner: Partner
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
  const { id, photo, name } = partner

  return (
    <Link href={`/partners/${id}`} className={s.card}>
      <StoredImage src={photo || ''} alt={name} width={600} height={300} />
    </Link>
  )
}

export default PartnerCard

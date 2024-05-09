import React from 'react'
import Image, { StaticImageData } from 'next/image'
import s from './PartnerItem.module.scss'
import Link from 'next/link'

type Props = {
  data: { id: number; name: string; image: StaticImageData }
}

const PartnerItem = ({ data }: Props) => {
  return (
    <Link className={s.container} href={'#'}>
      <Image src={data.image} alt={data.name} />
    </Link>
  )
}

export default PartnerItem

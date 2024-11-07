import { Article } from 'application/domain/entities/article/Article'
import React from 'react'
import s from './SearchItem.module.scss'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'
import Link from 'next/link'

type SearchItemProps = {
  data: Article
}

export default function SearchItem({ data }: SearchItemProps) {
  const type = data.type === 'video' ? 'Видео' : 'Статья'
  const href = `/blog/${data.type}/${data.slug || data.id}`

  return (
    <Link className={s.container} href={href}>
      <div className={s.img_container}>
        <StoredImage src={data.preview_img} alt="" width={100} height={100} className={s.img} />
      </div>
      <div className={s.text}>
        <div className={s.type}>{type}</div>
        <div className={s.name}>{data.title}</div>
      </div>
    </Link>
  )
}

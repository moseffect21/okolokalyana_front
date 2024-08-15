import React from 'react'
import s from './ProductContent.module.scss'
import { Product } from 'application/domain/entities/product/Product'
import Link from 'next/link'

type SocLinkItemProps = { title: string; url: string }

const SocLinkItem = ({ title, url }: SocLinkItemProps) => {
  return (
    <div className={s.link}>
      <div className={s.title}>{title}</div>
      <Link href={url}>{url}</Link>
    </div>
  )
}

type ProductContentProps = {
  product: Product
}

const ProductContent = ({ product }: ProductContentProps) => {
  const { description, wb_link, ozon_link, tg_link, vk_link, youtube_link, insta_link, content } =
    product

  return (
    <div className={s.container}>
      {!!ozon_link && <SocLinkItem title="ozon" url={ozon_link} />}
      {!!wb_link && <SocLinkItem title="wb" url={wb_link} />}
      {!!tg_link && <SocLinkItem title="tg" url={tg_link} />}
      {!!vk_link && <SocLinkItem title="vk" url={vk_link} />}
      {!!insta_link && <SocLinkItem title="inst" url={insta_link} />}
      {!!youtube_link && <SocLinkItem title="youtube" url={youtube_link} />}
      {content || description ? (
        <div
          className={s.description}
          dangerouslySetInnerHTML={{ __html: content || description || '' }}
        ></div>
      ) : null}
    </div>
  )
}

export default ProductContent

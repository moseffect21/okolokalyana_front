import { Product } from 'application/domain/entities/product/Product'
import React from 'react'
import s from './ProductCard.module.scss'
import StoredImage from '../uiComponents/StoredImage'
import Link from 'next/link'
import cn from 'classnames'

type ProductCardProps = {
  product: Product
  className?: string
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const image = product.images ? JSON.parse(product.images)[0] : ''

  const category = product.category ? product.category.slug : 'product'

  return (
    <Link className={cn(s.card, className || '')} href={`/showroom/${category}/${product.slug}`}>
      <StoredImage src={image} width={600} height={300} className={s.back_img} alt="" />
      <div className={s.gradient} />
      <div className={s.shadow} />
      <div className={s.anim}>
        <div className={s.title}>{product.name}</div>
        <div className={s.description}>{product.description}</div>
      </div>
    </Link>
  )
}

export default ProductCard

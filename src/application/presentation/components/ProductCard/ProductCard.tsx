import { Product } from 'application/domain/entities/product/Product'
import React, { useMemo } from 'react'
import s from './ProductCard.module.scss'
import StoredImage from '../uiComponents/StoredImage'
import Link from 'next/link'

type ProductCardProps = {
  product: Product
  className?: string
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const image = product.images ? JSON.parse(product.images)[0] : ''
  return (
    <Link className={`${s.card} ${className || ''}`} href={`/showroom/${product.slug}`}>
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

import { Product } from 'application/domain/entities/product/Product'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { getProduct } from 'application/domain/useCases/products/getProducts'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'
import s from './ShowroomProductPage.module.scss'
import ProductGallery from './components/ProductGallery'
import ProductContent from './components/ProductContent'
import { MetaShowroomProductPage } from 'application/presentation/meta/MetaContent'
import { ProductCategory } from 'application/domain/entities/product/ProductCategory'

export const getShowroomProductPageServerSideProps = async ({
  params,
}: GetServerSideDefaultProps) => {
  const productSlug = params?.product_slug
  if (!productSlug) {
    return {
      notFound: true,
    }
  }
  try {
    const product = await getProduct(productSlug as string)
    const category = product?.category || null

    return {
      props: {
        product,
        category,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type ShowroomProductPageProps = {
  product: Product
  category: ProductCategory
}

export default function ShowroomProductPage({ product, category }: ShowroomProductPageProps) {
  const breadCrumbs = [
    { id: 1, name: 'Главная', link: '/' },
    { id: 2, name: 'Шоурум', link: `/showroom` },
    {
      id: 3,
      name: category?.name || 'Все',
      link: `/showroom${category ? `/${category.slug}` : ''}`,
    }, // TODO: поправить когда категории подтянем
    { id: 4, name: product.name },
  ]

  return (
    <>
      <MetaShowroomProductPage name={product.name} />
      <PageLayout title={product.name} withBackButton breadCrumbs={breadCrumbs}>
        <div className={s.container}>
          <ProductGallery images={product.images} />
          <ProductContent product={product} />
        </div>
      </PageLayout>
    </>
  )
}

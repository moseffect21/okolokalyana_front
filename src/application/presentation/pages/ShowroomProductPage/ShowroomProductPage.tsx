import { Product } from 'application/domain/entities/product/Product'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { getProduct } from 'application/domain/useCases/products/getProducts'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'
import s from './ShowroomProductPage.module.scss'
import ProductGallery from './components/ProductGallery'
import ProductContent from './components/ProductContent'

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

    return {
      props: {
        product,
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
}

export default function ShowroomProductPage({ product }: ShowroomProductPageProps) {
  return (
    <PageLayout
      title={product.name}
      withBackButton
      breadCrumbs={[
        { id: 1, name: 'Шоурум', link: `/showroom` },
        { id: 2, name: 'Все', link: `/showroom` }, // TODO: поправить когда категории подтянем
        { id: 3, name: product.name },
      ]}
    >
      <div className={s.container}>
        <ProductGallery images={product.images} />
        <ProductContent product={product} />
      </div>
    </PageLayout>
  )
}

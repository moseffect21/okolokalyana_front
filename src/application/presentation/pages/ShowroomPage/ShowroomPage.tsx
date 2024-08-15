import { Product } from 'application/domain/entities/product/Product'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { getProducts } from 'application/domain/useCases/products/getProducts'
import checkPageNumber from 'application/domain/utils/checkPageNumber'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import Pagination from 'application/presentation/components/uiComponents/Pagination'
import React from 'react'
import s from './ShowroomPage.module.scss'
import ProductCard from 'application/presentation/components/ProductCard'
import Chips from 'application/presentation/components/uiComponents/Chips'

export const getShowroomPageServerSideProps = async ({ query }: GetServerSideDefaultProps) => {
  try {
    const page = query.page ? parseInt(query.page as string, 10) : 1
    const products = await getProducts(page)
    const { current_page, last_page, data, total } = products
    console.log(current_page)
    if (!checkPageNumber(current_page, last_page)) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        products: data,
        page: current_page,
        total,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type ShowroomPageProps = {
  products: Product[]
  page: number
  total: number
}

export default function ShowroomPage({ products, page, total }: ShowroomPageProps) {
  const categories = [
    { id: 1, name: 'Все', href: '/showroom' },
    { id: 2, name: 'Уголь', href: '/showroom/coals' },
  ]
  return (
    <PageLayout
      title="Шоурум"
      breadCrumbs={[
        { id: 1, name: 'Шоурум', link: `/showroom` },
        { id: 2, name: 'Все' },
      ]}
    >
      <div className={s.nav_container}>
        <Chips data={categories} />
        <Pagination page={page} total={total} />
      </div>

      <div className={s.container}>
        {products.map(product => (
          <ProductCard key={`product_${product.id}`} product={product} className={s.product} />
        ))}
      </div>
    </PageLayout>
  )
}

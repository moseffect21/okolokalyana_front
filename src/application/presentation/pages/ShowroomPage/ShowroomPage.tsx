import { Product } from 'application/domain/entities/product/Product'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { getProductCategories, getProducts } from 'application/domain/useCases/products/getProducts'
import checkPageNumber from 'application/domain/utils/checkPageNumber'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import Pagination from 'application/presentation/components/uiComponents/Pagination'
import React from 'react'
import s from './ShowroomPage.module.scss'
import ProductCard from 'application/presentation/components/ProductCard'
import Chips from 'application/presentation/components/uiComponents/Chips'
import { MetaShowroomPage } from 'application/presentation/meta/MetaContent'
import { ProductCategory } from 'application/domain/entities/product/ProductCategory'
import { fetchProductCategory } from 'application/data/api/products'
import pickParamsFromObject from 'application/domain/utils/pickParamsFromObject'

export const getShowroomPageServerSideProps = async ({
  query,
  params,
}: GetServerSideDefaultProps) => {
  const page = query.page ? parseInt(query.page as string, 10) : 1
  if (params?.category) {
    try {
      const categories = await getProductCategories()
      const category = await fetchProductCategory(params.category as string, page)
      const categoryWithoutProducts = pickParamsFromObject(category, ['id', 'name'])

      const { current_page, last_page, data, total } = category.products
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
          categories,
          category: categoryWithoutProducts,
        },
      }
    } catch (e) {
      return {
        notFound: true,
      }
    }
  } else {
    try {
      const products = await getProducts(page)
      const categories = await getProductCategories()
      const { current_page, last_page, data, total } = products
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
          categories,
        },
      }
    } catch (e) {
      return {
        notFound: true,
      }
    }
  }
}

type ShowroomPageProps = {
  products: Product[]
  page: number
  total: number
  categories: ProductCategory[]
  category: ProductCategory
}

export default function ShowroomPage({
  products,
  page,
  total,
  categories,
  category,
}: ShowroomPageProps) {
  const chips = [
    { id: -1, name: 'Все', href: '/showroom' },
    ...categories.map(category => ({
      id: category.id,
      name: category.name,
      href: `/showroom/${category.slug}`,
    })),
  ]
  const breadCrumbs = [
    { id: 1, name: 'Главная', link: '/' },
    { id: 2, name: 'Шоурум', link: `/showroom` },
    { id: 3, name: category?.name || 'Все' },
  ]
  const pageTitle = category?.name || 'Шоурум'

  return (
    <>
      <MetaShowroomPage />
      <PageLayout title={pageTitle} breadCrumbs={breadCrumbs}>
        <div className={s.nav_container}>
          <Chips data={chips} />
          <Pagination page={page} total={total} />
        </div>

        <div className={s.container}>
          {products.map(product => (
            <ProductCard key={`product_${product.id}`} product={product} className={s.product} />
          ))}
        </div>
        <Pagination page={page} total={total} />
      </PageLayout>
    </>
  )
}

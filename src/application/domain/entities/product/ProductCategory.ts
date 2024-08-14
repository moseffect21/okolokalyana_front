import { Pagination } from 'application/domain/types/Pagination'
import { Product } from './Product'

export type ProductCategory = {
  created_at: string
  id: number
  name: string
  parent: number
  photo: string | null
  show_main: boolean
  slug: string
  updated_at: string
}

export type ProductCategoryWithProducts = ProductCategory & {
  products: Pagination<Product[]>
}

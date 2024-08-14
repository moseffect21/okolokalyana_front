import { Pagination } from 'application/domain/types/Pagination'
import apiClient from '../apiClient'
import { Product } from 'application/domain/entities/product/Product'
import {
  ProductCategory,
  ProductCategoryWithProducts,
} from 'application/domain/entities/product/ProductCategory'

export const fetchProducts = async (page = 1): Promise<Pagination<Product[]>> => {
  const { data } = await apiClient.get(`/api/v1/shop/products?page=${page}`)
  return data
}

export const fetchProduct = async (slug: string): Promise<Product> => {
  const { data } = await apiClient.get(`/api/v1/shop/products/${slug}`)
  return data
}

export const commentProductRequest = async (id: number, text: string): Promise<any> => {
  const { data } = await apiClient.post(`/api/v1/shop/products/${id}/comment`, {
    text,
  })
  return data
}

export const fetchProductCategories = async (): Promise<ProductCategory[]> => {
  const { data } = await apiClient.get('/api/v1/shop/categories')
  return data
}

export const fetchProductCategory = async (
  id: number,
  page = 1,
): Promise<ProductCategoryWithProducts> => {
  const { data } = await apiClient.get(`/api/v1/shop/categories/${id}?page=${page}`)
  return data
}

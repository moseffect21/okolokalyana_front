import { useQuery } from '@tanstack/react-query'
import { fetchProduct, fetchProducts } from 'application/data/api/products'

export const getProducts = fetchProducts
export const getProduct = fetchProduct

export const useProducts = () => {
  const query = useQuery({ queryKey: ['products'], queryFn: () => fetchProducts() })
  return query
}

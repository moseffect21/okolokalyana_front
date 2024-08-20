import { GetArticleResponse } from 'application/domain/types/ResponseTypes'
import apiClient from '../apiClient'
import { ArticleCategory } from 'application/domain/entities/article/ArticleCategory'

export const fetchArticleRequest = async (idOrSlug: string): Promise<GetArticleResponse> => {
  const { data } = await apiClient.get(`/api/v1/article/${idOrSlug}`)
  return data
}

export const fetchArticleCategoryRequest = async (
  category: string,
  page = 1,
  options: { per_page?: number | null; sort?: string | null } | undefined = undefined,
): Promise<ArticleCategory> => {
  const { data } = await apiClient.get(`/api/v1/category/${category}`, {
    params: {
      page,
      ...options,
    },
  })
  return data
}

export const fetchArticleCategoriesRequest = async (): Promise<ArticleCategory[]> => {
  const { data } = await apiClient.get('/api/v1/categories')
  return data
}

import { GetArticleResponse } from 'application/domain/types/ResponseTypes'
import apiClient from '../apiClient'
import { ArticleCategory } from 'application/domain/entities/article/ArticleCategory'

export const fetchArticleRequest = async (idOrSlug: string): Promise<GetArticleResponse> => {
  const { data } = await apiClient.get(`/api/v1/article/${idOrSlug}`)
  return data
}

export const fetchArticleCategoryRequest = async (category: string): Promise<ArticleCategory> => {
  const { data } = await apiClient.get(`/api/v1/category/${category}`)
  return data
}
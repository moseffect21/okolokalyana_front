import { Article } from 'application/domain/entities/article/Article'
import apiClient from '../apiClient'

export const fetchSearchRequest = async (
  value: string,
  abortController?: AbortController,
): Promise<Article[]> => {
  const { data } = await apiClient.get(`/api/v1/search?text=${value}`, {
    signal: abortController?.signal,
  })
  return data
}

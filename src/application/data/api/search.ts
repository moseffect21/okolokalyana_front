import { Article } from 'application/domain/entities/article/Article'
import apiClient from '../apiClient'

const controller = new AbortController()

export const fetchSearchRequest = async (value: string): Promise<Article[]> => {
  controller.abort()
  const { data } = await apiClient.get(`/api/v1/search?text=${value}`, {
    signal: controller.signal,
  })
  return data
}

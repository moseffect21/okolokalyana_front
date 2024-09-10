import apiClient from '../apiClient'
import { LinksCategory } from 'application/domain/entities/links/LinksCategory'

export const fetchLinks = async (): Promise<LinksCategory[]> => {
  const { data } = await apiClient.get('/api/v1/taplinks')
  return data
}

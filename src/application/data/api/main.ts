import { MainData } from 'application/domain/entities/main/MainData'
import apiClient from '../apiClient'

export const fetchMainRequest = async (): Promise<MainData> => {
  const { data } = await apiClient.get(`/api/v1/main/`)
  return data
}

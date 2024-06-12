import { Partner, Partners } from 'application/domain/entities/partners/Partner'
import apiClient from '../apiClient'

export const fetchPartnersRequest = async (): Promise<Partners> => {
  const { data } = await apiClient.get('/api/v1/partners')
  return data
}

export const fetchPartnerRequest = async (id: number): Promise<Partner> => {
  const { data } = await apiClient.get(`/api/v1/partners/${id}`)
  return data
}

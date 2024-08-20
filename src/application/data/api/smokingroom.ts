import { SmokingRoomFilters } from 'application/domain/entities/smokingRoom/SmokingRoomFilters'
import apiClient from '../apiClient'
import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'

export const fetchSmokingRoomFiltersRequest = async (): Promise<SmokingRoomFilters> => {
  const { data } = await apiClient.get('/api/v1/tobacco_fillers/get_filters')
  return data
}

export const fetchSmokingRoomRequest = async (params: {
  bowl?: string
  hookah_block?: string
  tobacco?: string
  smoker?: string
  objective_rating?: string
  subjective_rating?: string
  users_rating?: string
  aroma_rating?: string
  coal_placement?: string
  coal?: string
  page?: number
  per_page?: string
}): Promise<TobaccoFiller[]> => {
  const { data } = await apiClient.get('/api/v1/tobacco_fillers', {
    params: {
      ...params,
    },
  })
  return data
}

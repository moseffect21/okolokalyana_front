import { SmokingRoomFilters } from 'application/domain/entities/smokingRoom/SmokingRoomFilters'
import apiClient from '../apiClient'
import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'
import { Pagination } from 'application/domain/types/Pagination'

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
  with_video?: string
  per_page?: string
}): Promise<Pagination<TobaccoFiller[]>> => {
  const page = params?.page || 1
  const { data } = await apiClient.get('/api/v1/tobacco_fillers', {
    params: {
      ...params,
      page,
    },
  })
  return data
}

export const fetchTobaccoFillerRequest = async (slug: string): Promise<TobaccoFiller> => {
  const { data } = await apiClient.get(`/api/v1/tobacco_fillers/${slug}`)
  return data
}

export const rateTobaccoFillerRequest = async (sendData: {
  tobacco_filler: number
  rate: number
  user?: number
}) => {
  const { data } = await apiClient.post(`/api/v1/tobacco_fillers/rate`, sendData)
  return data
}

import apiClient from 'application/data/apiClient'

const generateImageUrl = (src: string): string => {
  const { baseURL } = apiClient.defaults
  return baseURL?.endsWith('/')
    ? `${apiClient.defaults.baseURL}storage/${src}`
    : `${apiClient.defaults.baseURL}/storage/${src}`
}

export default generateImageUrl

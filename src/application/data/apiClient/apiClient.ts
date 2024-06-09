import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.apiUrl || 'https://okolokalyana.ru/',
  withCredentials: typeof window === 'undefined' ? false : true,
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
})

export default apiClient

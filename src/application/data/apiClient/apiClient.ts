import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.apiUrl || 'https://stage.kassa.cc',
  withCredentials: typeof window === 'undefined' ? false : true,
  headers: {
    'Content-Type': 'application/vnd.api+json',
    // 'Site-Locale': 'ru',
  },
})

export default apiClient

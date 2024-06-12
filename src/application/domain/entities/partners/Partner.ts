import { Articles } from '../article/Article'

export type Partner = {
  id: number
  description: string | null
  name: string
  photo: string | null
  short_desc: string | null
  show_main: boolean
  created_at: string
  updated_at: string
  articles: Articles
  videos: Articles
}

export type Partners = Partner[]

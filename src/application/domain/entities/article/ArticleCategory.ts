import { Articles } from './Article'

export type ArticleCategory = {
  created_at: string
  id: number
  name: string
  parent: number
  seo_description: string | null
  seo_keywords: string | null
  seo_title: string | null
  slug: string
  updated_at: string | null
  visible: boolean
  articles: Articles
}

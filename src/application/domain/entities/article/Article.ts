import { Authors } from '../author/Author'
import { ArticleCategory } from './ArticleCategory'

export type Article = {
  id: number
  created_at: string
  updated_at: string
  title: string
  description: string
  preview_text: string
  preview_img: string
  content: string
  view_count: number
  type: 'video' | 'article' | 'contest'
  url: string | null
  id_categories: number
  show_main: number
  count_like: number
  partner_id: number | null
  authors_id: number | null
  slug: string
  visible: number
  seo_title: string
  seo_description: string
  seo_keywords: string
  authors?: Authors
  time: string
  category: ArticleCategory
}
export type Articles = Article[]

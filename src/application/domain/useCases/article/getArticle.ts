import {
  fetchArticleCategoriesRequest,
  fetchArticleCategoryRequest,
  fetchArticleRequest,
} from 'application/data/api/articles'
import { ArticleCategory } from 'application/domain/entities/article/ArticleCategory'

export const fetchArticle = fetchArticleRequest
export const fetchArticleCategory = fetchArticleCategoryRequest
export const fetchArticleCategories = fetchArticleCategoriesRequest

export const getArticleCategorySubcategories = async (slug: string): Promise<ArticleCategory[]> => {
  const categories = await fetchArticleCategories()
  if (categories?.length) {
    const category = categories.find(category => category.slug === slug)
    return category?.subcategories || []
  }
  return []
}

import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'
import { ArticleCategory } from 'application/domain/entities/article/ArticleCategory'
import { fetchArticleCategory } from 'application/domain/useCases/article/getArticle'
import { MetaArticleCategoryPage } from 'application/presentation/meta/MetaContent'
import ArticlesContainer from './components/ArticlesContainer'
import 'dayjs/locale/ru'
import dayjs from 'dayjs'
import VideosContainer from './components/VideosContainer'
import getCategoryName from 'application/domain/useCases/category/getCategoryName'
import Pagination from 'application/presentation/components/uiComponents/Pagination'

dayjs.locale('ru')

export const getArticleCategoryPageServerSideProps = async ({
  params,
  query,
}: GetServerSideDefaultProps) => {
  if (!params?.category) {
    return {
      notFound: true,
    }
  }
  try {
    const page = query.page ? parseInt(query.page as string, 10) : 1
    const articleCategory = await fetchArticleCategory(params.category as string, page)
    const { current_page, last_page, total } = articleCategory.articles
    if (current_page > last_page || current_page <= 0) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        category: params.category,
        articleCategory,
        page: current_page,
        total,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type ArticleCategoryPageProps = {
  category: string
  articleCategory: ArticleCategory
  page: number
  total: number
}

export default function ArticleCategoryPage({
  category,
  articleCategory,
  page,
  total,
}: ArticleCategoryPageProps) {
  const title = getCategoryName(category)
  return (
    <>
      <MetaArticleCategoryPage articleCategory={articleCategory} />
      <PageLayout title={title} breadCrumbs={[{ id: 1, name: title }]}>
        <Pagination page={page} total={total} />
        {category === 'video' ? (
          <VideosContainer articleCategory={articleCategory} />
        ) : (
          <ArticlesContainer articleCategory={articleCategory} />
        )}
      </PageLayout>
    </>
  )
}

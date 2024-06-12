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

dayjs.locale('ru')

export const getArticleCategoryPageServerSideProps = async ({
  params,
}: GetServerSideDefaultProps) => {
  if (!params?.category) {
    return {
      notFound: true,
    }
  }
  try {
    const articleCategory = await fetchArticleCategory(params.category as string)
    return {
      props: {
        category: params.category,
        articleCategory,
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
}

export default function ArticleCategoryPage({
  category,
  articleCategory,
}: ArticleCategoryPageProps) {
  const title = getCategoryName(category)
  return (
    <>
      <MetaArticleCategoryPage articleCategory={articleCategory} />
      <PageLayout title={title} breadCrumbs={[{ id: 1, name: title }]}>
        {category === 'video' ? (
          <VideosContainer articleCategory={articleCategory} />
        ) : (
          <ArticlesContainer articleCategory={articleCategory} />
        )}
      </PageLayout>
    </>
  )
}

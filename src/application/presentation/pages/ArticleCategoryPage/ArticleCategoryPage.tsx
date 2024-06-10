import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'

export const getArticleCategoryPageServerSideProps = async ({
  params,
}: GetServerSideDefaultProps) => {
  if (!params?.category) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      category: params.category,
    },
  }
}

type ArticleCategoryPageProps = {
  category: string
}

export default function ArticleCategoryPage({ category }: ArticleCategoryPageProps) {
  const title = category === 'video' ? 'Видео' : 'Статьи'
  return <PageLayout title={title}>ArticleCategoryPage</PageLayout>
}

import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'

export const getArticlePageServerSideProps = async ({ params }: GetServerSideDefaultProps) => {
  return {
    props: {},
  }
}

export default function ArticlePage() {
  return <PageLayout>ArticlePage</PageLayout>
}

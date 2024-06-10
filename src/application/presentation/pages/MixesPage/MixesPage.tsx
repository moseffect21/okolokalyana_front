import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'

export const getMixesPageServerSideProps = async ({ params }: GetServerSideDefaultProps) => {
  return {
    props: {},
  }
}

export default function MixesPage() {
  return <PageLayout title="Большой забивочный цех">ArticleCategoryPage</PageLayout>
}

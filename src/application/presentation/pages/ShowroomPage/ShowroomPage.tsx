import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'

export const getShowroomPageServerSideProps = async ({ params }: GetServerSideDefaultProps) => {
  return {
    props: {},
  }
}

export default function ShowroomPage() {
  return <PageLayout title="Шоурум">ArticleCategoryPage</PageLayout>
}

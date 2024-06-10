import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'

export const getPartnersPageServerSideProps = async ({ params }: GetServerSideDefaultProps) => {
  return {
    props: {},
  }
}

export default function PartnersPage() {
  return <PageLayout title="Партнеры">PartnersPage</PageLayout>
}

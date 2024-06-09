import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'
import s from './NotFoundPage.module.scss'
import { MetaErrorPage } from 'application/presentation/meta/MetaContent'

export const getNotFoundPageServerSideProps = async ({}: GetServerSideDefaultProps) => {
  return {
    props: {},
  }
}

export default function NotFoundPage() {
  return (
    <>
      <MetaErrorPage code="404" />
      <PageLayout>
        <div className={s.container}>
          <div className={s.title}>404</div>
          <div className={s.subtitle}>Страница не найдена</div>
        </div>
      </PageLayout>
    </>
  )
}

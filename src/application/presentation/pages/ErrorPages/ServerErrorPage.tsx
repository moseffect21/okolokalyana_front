import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'
import s from './NotFoundPage.module.scss'
import { MetaErrorPage } from 'application/presentation/meta/MetaContent'

export const getServerErrorPageServerSideProps = async ({}: GetServerSideDefaultProps) => {
  return {
    props: {},
  }
}

export default function ServerErrorPage() {
  return (
    <>
      <MetaErrorPage code="500" />
      <PageLayout>
        <div className={s.container}>
          <div className={s.title}>500</div>
          <div className={s.subtitle}>Произошла ошибка</div>
        </div>
      </PageLayout>
    </>
  )
}

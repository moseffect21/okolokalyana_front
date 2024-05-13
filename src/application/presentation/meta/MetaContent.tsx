import React from 'react'
import Head from 'next/head'

const MetaAppContent = () => {
  return (
    <>
      <Head>
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon.png" /> */}
        {/* TODO: после развертки нового фронта изменить урл до фавикона */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  )
}

type MetaDataProps = {
  title: string
  desc: string
  keywords?: string
  image?: string
  indexable?: boolean
}

export const MetaData = ({ title, desc, image, keywords, indexable }: MetaDataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc}></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={desc}></meta>
      {indexable === false ? <meta name="robots" content="noindex"></meta> : <></>}
      {keywords ? <meta name="keywords" content={keywords}></meta> : null}
    </Head>
  )
}

export const MetaMainPage = () => (
  <MetaData
    title="Околокальяна — блог"
    desc="Это комьюнити ценителей кальяна, которое станет твоим проводником в околокальянный мир, в целую культуру, которая намного шире и богаче, чем просто «попускать дымок»."
    keywords="кальян, табак, чаша, чашка, смесь, чай, забить, миксология, кальянная, около кальяна, околокальяна, уголь, дома, россия, рф, ру, туториал, забивка, купить, заказать, обзор"
  />
)

export default MetaAppContent

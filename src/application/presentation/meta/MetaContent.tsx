import React from 'react'
import Head from 'next/head'

const MetaAppContent = () => {
  return (
    <>
      <Head>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" /> */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon.png" />
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" /> */}
        {/* <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" /> */}
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

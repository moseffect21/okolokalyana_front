import React from 'react'
import Head from 'next/head'
import { Partner } from 'application/domain/entities/partners/Partner'
import { ArticleCategory } from 'application/domain/entities/article/ArticleCategory'
import { Article } from 'application/domain/entities/article/Article'
import generateImageUrl from 'application/domain/utils/generateImageUrl'

const MetaAppContent = () => {
  return (
    <>
      <Head>
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon.png" /> */}
        {/* TODO: после развертки нового фронта изменить урл до фавикона */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="black" />
      </Head>
    </>
  )
}

type MetaDataProps = {
  title: string
  desc: string
  keywords?: string
  image?: string | null
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
      {!!image && <meta name="og:image" content={generateImageUrl(image)} />}
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

export const MetaAboutPage = () => (
  <MetaData
    title="О нас - Околокальяна"
    desc={`Команда проекта "Околокальяна" - люди, которые создают контент.`}
    keywords="блогер, кальян, табак, чаша, чашка, смесь, кальянщик, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
  />
)

export const MetaTeamMemberPage = ({
  name,
  desc,
  image,
}: {
  name: string
  desc: string
  image: string
}) => (
  <MetaData
    title={`${name} - Околокальяна`}
    desc={desc}
    image={image}
    keywords="блогер, кальян, табак, чаша, чашка, смесь, кальянщик, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
  />
)

export const MetaPartnersPage = () => (
  <MetaData
    title="Партнеры проекта - Околокальяна"
    desc="Кальянные бренды, которые помогают проекту развиваться."
    keywords="бренд, производитель, табак, чаша, чашка, смесь, чай, уголь, кальян, купить, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
  />
)

export const MetaPartnerPage = ({ partner }: { partner: Partner }) => (
  <MetaData
    title={`${partner.name} - Околокальяна`}
    desc={`${partner.short_desc} ${partner.description}`}
    image={partner.photo}
    keywords="бренд, производитель, табак, чаша, чашка, смесь, чай, уголь, кальян, купить, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
  />
)

export const MetaArticleCategoryPage = ({
  articleCategory,
}: {
  articleCategory: ArticleCategory
}) => (
  <MetaData
    title={articleCategory.seo_title || `${articleCategory.name} - Околокальяна`}
    desc={
      articleCategory.seo_description ||
      `${articleCategory.name} - Околокальяна. Это комьюнити ценителей кальяна, которое станет твоим проводником в околокальянный мир, в целую культуру, которая намного шире и богаче, чем просто «попускать дымок».`
    }
    keywords={
      articleCategory.seo_keywords ||
      'бренд, производитель, табак, чаша, чашка, смесь, чай, уголь, кальян, купить, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор'
    }
  />
)

export const MetaArticlePage = ({ article }: { article: Article }) => (
  <MetaData
    title={article.seo_title || `${article.title} - Околокальяна`}
    desc={article.seo_description || `${article.preview_text} ${article.description}`}
    keywords={
      article.seo_keywords ||
      'бренд, производитель, табак, чаша, чашка, смесь, чай, уголь, кальян, купить, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор'
    }
    image={article.preview_img || ''}
  />
)

export const MetaErrorPage = ({ code }: { code: string }) => (
  <MetaData
    title={`${code} - Околокальяна`}
    desc={''}
    keywords="блогер, кальян, табак, чаша, чашка, смесь, кальянщик, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
  />
)

export const MetaShowroomPage = () => (
  <MetaData
    title={`Шоурум - Околокальяна`}
    desc={''}
    keywords="блогер, кальян, табак, чаша, чашка, смесь, кальянщик, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
  />
)
export const MetaShowroomProductPage = ({ name }: { name: string }) => (
  <MetaData
    title={`${name} - Околокальяна`}
    desc={''}
    keywords="блогер, кальян, табак, чаша, чашка, смесь, кальянщик, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
  />
)
export const MetaSmokingRoomPage = () => (
  <MetaData
    title={`Прокурочный цех - Околокальяна`}
    desc={''}
    keywords="блогер, кальян, табак, чаша, чашка, смесь, кальянщик, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
  />
)
export const MetaTobaccoFillerPage = ({ name }: { name: string }) => (
  <MetaData
    title={`${name} - Околокальяна`}
    desc={''}
    keywords="блогер, кальян, табак, чаша, чашка, смесь, кальянщик, россия, рф, ру, околокальяна, около кальяна, туториал, обучение, забить, забивка, купить, заказать, обзор"
  />
)

export default MetaAppContent

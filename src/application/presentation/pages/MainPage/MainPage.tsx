import { MetaMainPage } from 'application/presentation/meta/MetaContent'
import React from 'react'
import MainContainer from './components/MainContainer/MainContainer'
import VideoSwiper from './components/VideoSwiper/VideoSwiper'
import NewsContainer from './components/NewsContainer'
import ArticlesMainContainer from './components/ArticlesMainContainer/ArticlesMainContainer'
import { Articles } from 'application/domain/entities/article/Article'
import { fetchMainRequest } from 'application/data/api/main'
import pickParamsFromObject from 'application/domain/utils/pickParamsFromObject'
import ShowroomSwiper from './components/ShowRoomSwiper'
import HookahContainer from './components/HookahContainer'

export const getMainPageServerSideProps = async () => {
  try {
    const mainData = await fetchMainRequest()
    const articles = mainData.articles
      .slice(0, 4)
      .map(item =>
        pickParamsFromObject(item, [
          'id',
          'preview_img',
          'slug',
          'title',
          'preview_text',
          'time',
          'created_at',
        ]),
      )

    return {
      props: {
        articles,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type MainPageProps = {
  articles: Articles
}

export default function MainPage({ articles }: MainPageProps) {
  return (
    <>
      <MetaMainPage />
      <main>
        <MainContainer />
        <NewsContainer />
        <VideoSwiper />
        <ArticlesMainContainer articles={articles} />
        <HookahContainer />
        <ShowroomSwiper/>
      </main>
    </>
  )
}

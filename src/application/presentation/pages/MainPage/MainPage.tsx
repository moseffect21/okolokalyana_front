import { MetaMainPage } from 'application/presentation/meta/MetaContent'
import React from 'react'
import MainContainer from './components/MainContainer/MainContainer'
import VideoSwiper from './components/VideoSwiper/VideoSwiper'
import NewsContainer from './components/NewsContainer'
import ArticlesMainContainer from './components/ArticlesMainContainer/ArticlesMainContainer'
import { fetchMainRequest } from 'application/data/api/main'
import ShowroomSwiper from './components/ShowRoomSwiper'
import HookahContainer from './components/HookahContainer'
import { MainData } from 'application/domain/entities/main/MainData'
import MainPageBlockWithBackground from './components/MainPageBlockWithBackground/MainPageBlockWithBackground'
import AboutMain from './components/AboutMain'
import PartnersMain from './components/PartnersMain'

export const getMainPageServerSideProps = async () => {
  try {
    const mainData = await fetchMainRequest()
    return {
      props: {
        ...mainData,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type MainPageProps = MainData

export default function MainPage({
  articles,
  team,
  partners,
  updates,
  fillers,
  products,
}: MainPageProps) {
  return (
    <>
      <MainPageBlockWithBackground />
      <MetaMainPage />
      <MainContainer />
      <NewsContainer news={updates} />
      <VideoSwiper />
      <ArticlesMainContainer articles={articles} />
      <HookahContainer />
      <ShowroomSwiper products={products} />
      <AboutMain team={team} />
      <PartnersMain partners={partners} />
    </>
  )
}

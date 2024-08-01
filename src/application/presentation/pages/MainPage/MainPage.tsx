import { MetaMainPage } from 'application/presentation/meta/MetaContent'
import React from 'react'
import MainContainer from './components/MainContainer/MainContainer'
import VideoSwiper from './components/VideoSwiper/VideoSwiper'
import NewsContainer from './components/NewsContainer'
import ArticlesMainContainer from './components/ArticlesContainer/ArticlesMainContainer'

export default function MainPage() {
  return (
    <>
      <MetaMainPage />
      <main>
        <MainContainer />
        <NewsContainer />
        <VideoSwiper />
        <ArticlesMainContainer/>
      </main>
    </>
  )
}

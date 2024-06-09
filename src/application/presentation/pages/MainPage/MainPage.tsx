import { MetaMainPage } from 'application/presentation/meta/MetaContent'
import React from 'react'
import MainContainer from './components/MainContainer'
import ArticlesContainer from './components/ArticlesContainer'
import VideoSwiper from './components/VideoSwiper'

export default function MainPage() {
  return (
    <>
      <MetaMainPage />
      <div>
        <MainContainer />
        <ArticlesContainer />
        <VideoSwiper />
      </div>
    </>
  )
}

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
import { fetchSmokingRoomFilters } from 'application/domain/useCases/smokingroom/getSmokingRoom'
import { getFilterOptions } from 'application/domain/useCases/smokingroom/smokingRoomFilterUtils'
import { SelectOption } from 'application/presentation/components/uiComponents/InputComponents/Selector/Selector'

export const getMainPageServerSideProps = async () => {
  try {
    const mainData = await fetchMainRequest()
    const filters = await fetchSmokingRoomFilters()

    const filterOptions = getFilterOptions(filters)
    return {
      props: {
        ...mainData,
        filterOptions,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type MainPageProps = MainData & {
  filterOptions: {
    bowlOptions: SelectOption[]
    tobaccoOptions: SelectOption[]
    hookahBlockOptions: SelectOption[]
    subjectiveRateOptions: SelectOption[]
    objectiveRateOptions: SelectOption[]
    smokersOptions: SelectOption[]
  }
}

export default function MainPage({
  articles,
  team,
  partners,
  updates,
  fillers,
  products,
  filterOptions,
}: MainPageProps) {
  return (
    <>
      <MainPageBlockWithBackground />
      <MetaMainPage />
      <MainContainer />
      <NewsContainer news={updates} />
      <VideoSwiper />
      <ArticlesMainContainer articles={articles} />
      <HookahContainer {...filterOptions} fillers={fillers} />
      {products?.length > 3 && <ShowroomSwiper products={products} />}
      <AboutMain team={team} />
      <PartnersMain partners={partners} />
    </>
  )
}

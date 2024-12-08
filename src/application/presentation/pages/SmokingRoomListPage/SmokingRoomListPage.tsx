import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import {
  fetchSmokingRoom,
  fetchSmokingRoomFilters,
} from 'application/domain/useCases/smokingroom/getSmokingRoom'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaSmokingRoomPage } from 'application/presentation/meta/MetaContent'
import React from 'react'
import s from './SmokingRoomListPage.module.scss'
import { SelectOption } from 'application/presentation/components/uiComponents/InputComponents/Selector/Selector'
import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'
import EmptyNotice from 'application/presentation/components/uiComponents/EmptyNotice'
import checkPageNumber from 'application/domain/utils/checkPageNumber'
import { getFilterOptions } from 'application/domain/useCases/smokingroom/smokingRoomFilterUtils'
import TobaccoFillerCard from 'application/presentation/components/TobaccoFillerCard'
import Pagination from 'application/presentation/components/uiComponents/Pagination'
import Filters from 'application/presentation/components/Filters'

export const getSmokingRoomListPageServerSideProps = async ({
  query,
}: GetServerSideDefaultProps) => {
  try {
    const page = query.page ? parseInt(query.page as string, 10) : 1

    const smokingRoomResponse = await fetchSmokingRoom({
      bowl: query.bowl as string,
      tobacco: query.tobacco as string,
      hookah_block: query.hookahBlock as string,
      subjective_rating: query.subjectiveRating as string,
      objective_rating: query.objectiveRating as string,
      smoker: query.smoker as string,
      with_video: query.withVideo as string,
      page,
    })

    const { current_page, last_page, total, data } = smokingRoomResponse

    if (!checkPageNumber(current_page, last_page)) {
      return {
        notFound: true,
      }
    }

    const filters = await fetchSmokingRoomFilters()

    const {
      bowlOptions,
      tobaccoOptions,
      hookahBlockOptions,
      subjectiveRateOptions,
      smokersOptions,
      objectiveRateOptions,
    } = getFilterOptions(filters)

    return {
      props: {
        bowlOptions,
        tobaccoOptions,
        hookahBlockOptions,
        subjectiveRateOptions,
        objectiveRateOptions,
        smokersOptions,
        data,
        page: current_page,
        total,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type SmokingRoomPageProps = {
  bowlOptions: SelectOption[]
  tobaccoOptions: SelectOption[]
  hookahBlockOptions: SelectOption[]
  subjectiveRateOptions: SelectOption[]
  objectiveRateOptions: SelectOption[]
  smokersOptions: SelectOption[]
  data: TobaccoFiller[]
  page: number
  total: number
}

export default function SmokingRoomListPage({
  bowlOptions,
  tobaccoOptions,
  hookahBlockOptions,
  subjectiveRateOptions,
  objectiveRateOptions,
  smokersOptions,
  data,
  page,
  total,
}: SmokingRoomPageProps) {
  const breadcrumbs = [
    { id: 1, name: 'Главная', link: '/' },
    { id: 2, name: 'Прокурочный цех' },
  ]
  return (
    <>
      <MetaSmokingRoomPage />
      <PageLayout title="Прокурочный цех" breadCrumbs={breadcrumbs}>
        <Filters
          {...{
            bowlOptions,
            tobaccoOptions,
            hookahBlockOptions,
            smokersOptions,
            subjectiveRateOptions,
            objectiveRateOptions,
          }}
        />
        <div className={s.container}>
          <div className={s.title_container}>
            <div className={s.title}>Результаты поиска</div>
            <Pagination page={page} total={total} />
          </div>

          {data.length ? (
            <div className={s.fillers}>
              {data.map(filler => (
                <TobaccoFillerCard key={`filler_${filler.id}`} tobaccoFiller={filler} />
              ))}
            </div>
          ) : (
            <EmptyNotice text={'По вашему запросу ничего не найдено'} />
          )}
          <Pagination page={page} total={total} className={s.bottom_pagination} />
        </div>
      </PageLayout>
    </>
  )
}

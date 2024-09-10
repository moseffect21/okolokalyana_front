import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import {
  fetchSmokingRoom,
  fetchSmokingRoomFilters,
} from 'application/domain/useCases/smokingroom/getSmokingRoom'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaSmokingRoomPage } from 'application/presentation/meta/MetaContent'
import React, { useState } from 'react'
import s from './SmokingRoomListPage.module.scss'
import Selector from 'application/presentation/components/uiComponents/InputComponents/Selector'
import Button from 'application/presentation/components/uiComponents/Button'
import { SelectOption } from 'application/presentation/components/uiComponents/InputComponents/Selector/Selector'
import { useRouter, useSearchParams } from 'next/navigation'
import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'
import EmptyNotice from 'application/presentation/components/uiComponents/EmptyNotice'
import checkPageNumber from 'application/domain/utils/checkPageNumber'
import {
  FilterStateType,
  getFilterOptions,
  getInitFilterState,
} from 'application/domain/useCases/smokingroom/smokingRoomFilterUtils'
import TobaccoFillerCard from 'application/presentation/components/TobaccoFillerCard'
import Pagination from 'application/presentation/components/uiComponents/Pagination'

export const getSmokingRoomListPageServerSideProps = async ({
  query,
}: GetServerSideDefaultProps) => {
  try {
    const page = query.page ? parseInt(query.page as string, 10) : 1

    const smokingRoomResponse = await fetchSmokingRoom({
      bowl: query.bowl as string,
      tobacco: query.tobacco as string,
      hookah_block: query.hookahBlock as string,
      subjective_rating: query.subjective_rating as string,
      objective_rating: query.objective_rating as string,
      smoker: query.smoker as string,
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
  const router = useRouter()
  const params = useSearchParams()

  const [filterState, setFilterState] = useState<FilterStateType>(
    getInitFilterState(params, {
      bowlOptions,
      tobaccoOptions,
      hookahBlockOptions,
      subjectiveRateOptions,
      objectiveRateOptions,
      smokersOptions,
    }),
  )

  const handleFilterChange = (key: keyof FilterStateType) => (value: SelectOption) => {
    setFilterState(prev => ({ ...prev, [key]: value }))
  }

  const searchClickHandler = () => {
    const params = new URLSearchParams()
    Object.entries(filterState).map(item => {
      if (item[1]?.value) params.set(item[0], item[1].value)
    })
    router.push(`/smokingroom/list?${params.toString()}`)
  }

  return (
    <>
      <MetaSmokingRoomPage />
      <PageLayout title="Прокурочный цех">
        <div className={s.filters_container}>
          <Selector
            options={bowlOptions}
            placeholder="Выберите чашу"
            title="Чаша"
            onChange={handleFilterChange('bowl')}
            value={filterState.bowl}
            containerClassName={s.selector}
            isClearable
          />
          <Selector
            options={tobaccoOptions}
            placeholder="Выберите табак"
            title="Табак"
            onChange={handleFilterChange('tobacco')}
            value={filterState.tobacco}
            containerClassName={s.selector}
            isClearable
          />
          <Selector
            options={hookahBlockOptions}
            placeholder="Выберите коллауд"
            title="Коллауд"
            onChange={handleFilterChange('hookahBlock')}
            value={filterState.hookahBlock}
            containerClassName={s.selector}
            isClearable
          />
          <Selector
            options={subjectiveRateOptions}
            placeholder="Выберите оценку"
            title="Субъективная оценка"
            onChange={handleFilterChange('subjectiveRating')}
            value={filterState.subjectiveRating}
            containerClassName={s.selector}
            isClearable
          />
          <Selector
            options={objectiveRateOptions}
            placeholder="Выберите оценку"
            title="Объективная оценка"
            onChange={handleFilterChange('objectiveRating')}
            value={filterState.objectiveRating}
            containerClassName={s.selector}
            isClearable
          />
          <Selector
            options={smokersOptions}
            placeholder="Выберите прокурщика"
            title="Прокурщик"
            onChange={handleFilterChange('smoker')}
            value={filterState.smoker}
            containerClassName={s.selector}
            isClearable
          />
          <Button
            color="fiol"
            className={s.search_btn}
            containerClassName={s.search_btn_container}
            onClick={searchClickHandler}
          >
            Поиск
          </Button>
        </div>
        <div className={s.container}>
          <div className={s.title_container}>
            <div className={s.title}>Результаты поиска</div>
            <Pagination page={page} total={total} />
          </div>
          {data.length ? (
            data.map(filler => (
              <TobaccoFillerCard key={`filler_${filler.id}`} tobaccoFiller={filler} />
            ))
          ) : (
            <EmptyNotice text={'По вашему запросу ничего не найдено'} />
          )}
        </div>
      </PageLayout>
    </>
  )
}

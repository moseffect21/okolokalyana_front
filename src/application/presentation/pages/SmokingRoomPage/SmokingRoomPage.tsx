import { SmokingRoomFilters } from 'application/domain/entities/smokingRoom/SmokingRoomFilters'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import {
  fetchSmokingRoom,
  fetchSmokingRoomFilters,
} from 'application/domain/useCases/smokingroom/getSmokingRoom'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaSmokingRoomPage } from 'application/presentation/meta/MetaContent'
import React, { useState } from 'react'
import s from './SmokingRoomPage.module.scss'
import Selector from 'application/presentation/components/uiComponents/InputComponents/Selector'
import Button from 'application/presentation/components/uiComponents/Button'
import { SelectOption } from 'application/presentation/components/uiComponents/InputComponents/Selector/Selector'
import { useRouter, useSearchParams } from 'next/navigation'
import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'
import EmptyNotice from 'application/presentation/components/uiComponents/EmptyNotice'

export const getSmokingRoomPageServerSideProps = async ({
  params,
  query,
}: GetServerSideDefaultProps) => {
  try {
    const filters = await fetchSmokingRoomFilters()

    const data = await fetchSmokingRoom({
      bowl: query.bowl as string,
      tobacco: query.tobacco as string,
      hookah_block: query.hookahBlock as string,
      subjective_rating: query.subjective_rating as string,
      objective_rating: query.objective_rating as string,
      smoker: query.smoker as string,
    })

    // Формируем элементы для селектора
    const bowlOptions =
      filters.bowls?.map(bowl => ({
        label: bowl.name,
        value: `${bowl.id}`,
      })) || []
    const tobaccoOptions =
      filters.tobaccos?.map(tobacco => ({
        label: tobacco.name,
        value: `${tobacco.id}`,
      })) || []
    const hookahBlockOptions =
      filters.hookah_block?.map(block => ({
        label: block.name,
        value: `${block.id}`,
      })) || []
    const subjectiveRateOptions =
      filters.subjective_rating?.map(item => ({
        label: `${item}`,
        value: `${item}`,
      })) || []
    const objectiveRateOptions =
      filters.objective_rating?.map(item => ({
        label: `${item}`,
        value: `${item}`,
      })) || []
    const smokersOptions =
      filters.smokers?.map(item => ({
        label: item.name,
        value: `${item.id}`,
      })) || []

    return {
      props: {
        bowlOptions,
        tobaccoOptions,
        hookahBlockOptions,
        subjectiveRateOptions,
        objectiveRateOptions,
        smokersOptions,
        data,
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
}

type FilterState = {
  bowl: SelectOption | null
  tobacco: SelectOption | null
  hookahBlock: SelectOption | null
  subjectiveRating: SelectOption | null
  objectiveRating: SelectOption | null
  smoker: SelectOption | null
}

export default function SmokingRoomPage({
  bowlOptions,
  tobaccoOptions,
  hookahBlockOptions,
  subjectiveRateOptions,
  objectiveRateOptions,
  smokersOptions,
  data,
}: SmokingRoomPageProps) {
  console.log(data)
  const router = useRouter()
  const params = useSearchParams()

  const [filterState, setFilterState] = useState<FilterState>(() => {
    return {
      bowl: bowlOptions.find(bowl => bowl.value === params.get('bowl')) || null,
      tobacco: tobaccoOptions.find(tobacco => tobacco.value === params.get('tobacco')) || null,
      hookahBlock:
        hookahBlockOptions.find(block => block.value === params.get('hookahBlock')) || null,
      subjectiveRating:
        subjectiveRateOptions.find(item => item.value === params.get('subjectiveRating')) || null,
      objectiveRating:
        objectiveRateOptions.find(item => item.value === params.get('objectiveRating')) || null,
      smoker: smokersOptions.find(smoker => smoker.value === params.get('smoker')) || null,
    }
  })

  const handleFilterChange = (key: keyof FilterState) => (value: SelectOption) => {
    setFilterState(prev => ({ ...prev, [key]: value }))
  }

  const searchClickHandler = () => {
    const params = new URLSearchParams()
    Object.entries(filterState).map(item => {
      if (item[1]?.value) params.set(item[0], item[1].value)
    })
    router.push(`/smokingroom?${params.toString()}`)
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
        {data.length ? (
          <div className={s.container}>
            {data.map(filler => (
              // TODO: тут вывести нормальную карточку
              <div key={`filler_${filler.id}`} style={{ fontSize: '2rem' }}>
                #{filler.id} {filler.name}
              </div>
            ))}
          </div>
        ) : (
          <EmptyNotice text={'По вашему запросу ничего не найдено'} />
        )}
      </PageLayout>
    </>
  )
}

import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { fetchSmokingRoomFilters } from 'application/domain/useCases/smokingroom/getSmokingRoom'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaSmokingRoomPage } from 'application/presentation/meta/MetaContent'
import React, { useState } from 'react'
import s from './SmokingRoomPage.module.scss'
import Selector from 'application/presentation/components/uiComponents/InputComponents/Selector'
import Button from 'application/presentation/components/uiComponents/Button'
import { SelectOption } from 'application/presentation/components/uiComponents/InputComponents/Selector/Selector'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  FilterStateType,
  getFilterOptions,
  getInitFilterState,
} from 'application/domain/useCases/smokingroom/smokingRoomFilterUtils'
import { Bowl } from 'application/domain/entities/bowl/Bowl'
import { HookahBlock } from 'application/domain/entities/hookah/HookahBlock'
import { Tobacco } from 'application/domain/entities/tobacco/Tobacco'
import TobaccosContainer from './components/TobaccosContainer'
import BowlsContainer from './components/BowlsContainer'
import HookahBlocksContainer from './components/TobaccoBlocksContainer'

export const getSmokingRoomPageServerSideProps = async ({ query }: GetServerSideDefaultProps) => {
  try {
    const filters = await fetchSmokingRoomFilters()
    const {
      top_bowls,
      top_hookah_blocks,
      top_tobaccos,
      bowls_count,
      hookah_blocks_count,
      tobaccos_count,
    } = filters

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
        top_bowls,
        top_hookah_blocks,
        top_tobaccos,
        bowls_count,
        hookah_blocks_count,
        tobaccos_count,
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
  top_bowls: Bowl[]
  top_hookah_blocks: HookahBlock[]
  top_tobaccos: Tobacco[]
  bowls_count: number
  hookah_blocks_count: number
  tobaccos_count: number
}

export default function SmokingRoomPage({
  bowlOptions,
  tobaccoOptions,
  hookahBlockOptions,
  subjectiveRateOptions,
  objectiveRateOptions,
  smokersOptions,
  top_bowls,
  top_hookah_blocks,
  top_tobaccos,
  bowls_count,
  hookah_blocks_count,
  tobaccos_count,
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
          {!!top_tobaccos.length && (
            <TobaccosContainer tobaccos={top_tobaccos} total={tobaccos_count} />
          )}
          {!!top_bowls.length && <BowlsContainer bowls={top_bowls} total={bowls_count} />}
          {!!top_hookah_blocks.length && (
            <HookahBlocksContainer hookahBlocks={top_hookah_blocks} total={hookah_blocks_count} />
          )}
        </div>
      </PageLayout>
    </>
  )
}

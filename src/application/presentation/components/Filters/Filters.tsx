import React, { useState } from 'react'
import s from './Filters.module.scss'
import Selector from '../uiComponents/InputComponents/Selector'
import {
  FilterStateType,
  getInitFilterState,
} from 'application/domain/useCases/smokingroom/smokingRoomFilterUtils'
import { useRouter, useSearchParams } from 'next/navigation'
import { SelectOption } from '../uiComponents/InputComponents/Selector/Selector'
import Button from '../uiComponents/Button'

type FiltersProps = {
  bowlOptions: SelectOption[]
  tobaccoOptions: SelectOption[]
  hookahBlockOptions: SelectOption[]
  subjectiveRateOptions: SelectOption[]
  objectiveRateOptions: SelectOption[]
  smokersOptions: SelectOption[]
}

const Filters = ({
  bowlOptions,
  tobaccoOptions,
  hookahBlockOptions,
  subjectiveRateOptions,
  objectiveRateOptions,
  smokersOptions,
}: FiltersProps) => {
  const params = useSearchParams()
  const router = useRouter()
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
        placeholder="Выберите калауд"
        title="Калауд"
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
  )
}

export default Filters

import { SmokingRoomFilters } from 'application/domain/entities/smokingRoom/SmokingRoomFilters'
import { SelectOption } from 'application/presentation/components/uiComponents/InputComponents/Selector/Selector'
import { ReadonlyURLSearchParams } from 'next/navigation'

type GetFilterOptionsType = {
  bowlOptions: SelectOption[]
  tobaccoOptions: SelectOption[]
  hookahBlockOptions: SelectOption[]
  subjectiveRateOptions: SelectOption[]
  objectiveRateOptions: SelectOption[]
  smokersOptions: SelectOption[]
}

export const getFilterOptions = (filters: SmokingRoomFilters): GetFilterOptionsType => {
  // Формируем элементы для селектора
  const bowlOptions =
    filters.bowls?.map(bowl => ({
      label: bowl.name,
      value: `${bowl.slug || bowl.id}`,
    })) || []
  const tobaccoOptions =
    filters.tobaccos?.map(tobacco => ({
      label: tobacco.name,
      value: `${tobacco.slug || tobacco.id}`,
    })) || []
  const hookahBlockOptions =
    filters.hookah_block?.map(block => ({
      label: block.name,
      value: `${block.slug || block.id}`,
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
    bowlOptions,
    tobaccoOptions,
    hookahBlockOptions,
    subjectiveRateOptions,
    objectiveRateOptions,
    smokersOptions,
  }
}

export type FilterStateType = {
  bowl: SelectOption | null
  tobacco: SelectOption | null
  hookahBlock: SelectOption | null
  subjectiveRating: SelectOption | null
  objectiveRating: SelectOption | null
  smoker: SelectOption | null
}
export const getInitFilterState = (
  params: ReadonlyURLSearchParams,
  filterOptions: GetFilterOptionsType,
) => {
  const {
    bowlOptions,
    tobaccoOptions,
    hookahBlockOptions,
    subjectiveRateOptions,
    objectiveRateOptions,
    smokersOptions,
  } = filterOptions
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
}

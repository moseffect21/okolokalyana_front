import React from 'react'
import Select from 'react-select'
import { selectorStyles } from './styles'
import cn from 'classnames'
import s from './Selector.module.scss'

export type SelectOption = { value: string; label: string }

type SelectorProps = {
  options: SelectOption[]
  value?: SelectOption | null
  onChange: (val: SelectOption) => void
  placeholder?: string
  defaultValue?: SelectOption
  title?: string
  containerClassName?: string
  isClearable?: boolean
  isSearchable?: boolean
}

const Selector = ({
  options,
  placeholder,
  value,
  onChange,
  defaultValue,
  title,
  containerClassName,
  isClearable,
  isSearchable,
}: SelectorProps) => {
  const handleSelectChange = (newValue: any) => {
    onChange(newValue as SelectOption)
  }
  return (
    <div className={cn(s.container, containerClassName)}>
      {!!title && <div className={s.title}>{title}</div>}

      <Select
        options={options}
        styles={selectorStyles}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={handleSelectChange}
        isClearable={isClearable}
        isSearchable={isSearchable}
      />
    </div>
  )
}

export default Selector

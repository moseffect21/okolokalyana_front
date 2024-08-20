import React from 'react'
import Select from 'react-select'
import { selectorStyles } from './styles'

export type SelectOption = { value: string; label: string }

type SelectorProps = {
  options: SelectOption[]
  value?: string
  onChange: (val: string) => void
  placeholder?: string
  defaultValue?: string
}

const Selector = ({ options, placeholder, value, onChange, defaultValue }: SelectorProps) => {
  const handleSelectChange = ({ value }: any) => {
    onChange(value)
  }
  return (
    <Select
      options={options}
      styles={selectorStyles}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={handleSelectChange}
    />
  )
}

export default Selector

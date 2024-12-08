import React from 'react'
import cn from 'classnames'
import CheckSvg from 'images/check.svg'
import s from './Checkbox.module.scss'
type CheckboxProps = {
  value: boolean
  children: React.ReactNode | string
  onChange: (newVal: boolean) => void
}

const Checkbox = ({ value, children, onChange }: CheckboxProps) => {
  const onClickHandler = () => onChange(!value)
  return (
    <div className={s.container} onClick={onClickHandler}>
      <div className={cn(s.checkbox, { [s.active]: value })}>{value && <CheckSvg />}</div>
      <div className={s.text}>{children}</div>
    </div>
  )
}

export default Checkbox

import React from 'react'
import ScopeSvg from 'images/icons/scope.svg'
import s from './SearchField.module.scss'

export default function SearchField() {
  return (
    <div className={s.container}>
      <button className={s.search_button}>
        <div>Поиск</div>
        <ScopeSvg />
      </button>
    </div>
  )
}

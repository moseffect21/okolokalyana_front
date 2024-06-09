import React, { useState } from 'react'
import ScopeSvg from 'images/icons/scope.svg'
import s from './SearchField.module.scss'
import SearchMW from '../../ModalWindows/SearchMW'

export default function SearchField() {
  const [opened, setOpened] = useState<boolean>(false)
  const onButtonClick = () => setOpened(true)
  return (
    <>
      <div className={s.container}>
        <button className={s.search_button} onClick={onButtonClick}>
          <div>Поиск</div>
          <ScopeSvg />
        </button>
      </div>
      <SearchMW opened={opened} setOpened={setOpened} />
    </>
  )
}

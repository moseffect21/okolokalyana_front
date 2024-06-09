import React, { useEffect, useState } from 'react'
import s from './AgeNotify.module.scss'
import Button from '../../uiComponents/Button'
import ModalWindow from '../ModalWindow'

export default function AgeNotify() {
  const [opened, setOpened] = useState<boolean>(false)

  const onClickHandler = () => {
    window.localStorage.setItem('18plus', '1')
    setOpened(false)
  }

  useEffect(() => {
    if (window.localStorage.getItem('18plus')) {
      setOpened(false)
    } else if (window.location.pathname !== '/links') {
      setOpened(true)
    }
  }, [])

  return (
    <ModalWindow opened={opened} setOpened={setOpened} withoutCloseBtn>
      <div className={s.title}>Подтвердите что вам больше 18 лет</div>
      <div className={s.txt}>
        Просмотр данного сайта разрешен только лицам, достигшим возраста в 18 лет. Сайт содержит
        информацию и изображения табачных изделий и куриносительных принадлежностей. Нажав на кнопку
        “Продолжить” Вы подтверждаете свое совершеннолетие и принимаете условия пользовательского
        соглашения
      </div>
      <Button onClick={onClickHandler}>Продолжить</Button>
    </ModalWindow>
  )
}

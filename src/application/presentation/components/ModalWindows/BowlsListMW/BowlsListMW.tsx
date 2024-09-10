import React, { useMemo } from 'react'
import s from './BowlsListMW.module.scss'
import ModalWindow from '../ModalWindow'
import { useRouter } from 'next/router'
import { Bowl } from 'application/domain/entities/bowl/Bowl'
import Cards from '../../uiComponents/Cards'

type BowlsListMWProps = {
  bowls: Bowl[]
}
export default function BowlsListMW({ bowls }: BowlsListMWProps) {
  const { asPath, back } = useRouter()

  const opened = useMemo(() => {
    const hash = asPath.split('#')[1]
    return hash === 'bowls'
  }, [asPath])

  const onClose = () => back()

  return (
    <ModalWindow opened={opened} setOpened={onClose} onRequestClose={onClose} isLarge>
      <div className={s.title}>Чаши</div>
      <Cards data={bowls} cardLinkPrefix="/smokingroom/list?bowl=" />
    </ModalWindow>
  )
}

import React, { useEffect, useMemo } from 'react'
import s from './HookahBlockListMW.module.scss'
import ModalWindow from '../ModalWindow'
import { useRouter } from 'next/router'
import Cards from '../../uiComponents/Cards'
import { HookahBlock } from 'application/domain/entities/hookah/HookahBlock'

type HookahBlockListMWProps = {
  hookahBlocks: HookahBlock[]
}

export default function HookahBlockListMW({ hookahBlocks }: HookahBlockListMWProps) {
  const { asPath, back } = useRouter()

  const opened = useMemo(() => {
    const hash = asPath.split('#')[1]
    return hash === 'hookah_blocks'
  }, [asPath])

  const onClose = () => back()

  return (
    <ModalWindow opened={opened} setOpened={onClose} onRequestClose={onClose} isLarge>
      <div className={s.title}>Калауды</div>
      <Cards data={hookahBlocks} cardLinkPrefix="/smokingroom/list?hookah_block=" />
    </ModalWindow>
  )
}

import React, { useMemo } from 'react'
import s from './TobaccoListMW.module.scss'
import ModalWindow from '../ModalWindow'
import { useRouter } from 'next/router'
import { Tobacco } from 'application/domain/entities/tobacco/Tobacco'
import groupByAlphabet from 'application/domain/utils/groupByAlphabet'
import Link from 'next/link'

type TobaccoListMWProps = {
  tobaccos: Tobacco[]
}

export default function TobaccoListMW({ tobaccos }: TobaccoListMWProps) {
  const { asPath, back } = useRouter()

  const opened = useMemo(() => {
    const hash = asPath.split('#')[1]
    return hash === 'tobaccos'
  }, [asPath])

  const onClose = () => back()

  const sorted = useMemo(() => Object.entries(groupByAlphabet(tobaccos)), [tobaccos])

  return (
    <ModalWindow opened={opened} setOpened={onClose} onRequestClose={onClose}>
      <div className={s.title}>Табаки</div>
      {sorted.map(item => (
        <div className={s.group} key={`group_${item[0]}`}>
          <div className={s.word}>{item[0].toUpperCase()}</div>
          <div className={s.items}>
            {item[1].map(tobacco => (
              <Link
                key={`tobacco_${tobacco.id}`}
                className={s.item}
                href={`/smokingroom/list?tobacco=${tobacco.slug || tobacco.id}`}
              >
                {tobacco.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </ModalWindow>
  )
}

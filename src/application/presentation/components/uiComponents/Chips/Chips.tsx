import React from 'react'
import s from './Chips.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type ChipsItem = {
  id: number | string
  name: string
  href?: string
}

type ChipsProps = {
  data: ChipsItem[]
  onItemClick?: (item: ChipsItem) => void
  className?: string
}

const Chips = ({ className, data, onItemClick }: ChipsProps) => {
  const pathname = usePathname()
  return (
    <div className={`${s.container} ${className || ''}`}>
      {data.map(item => {
        const Wrapper = item.href ? Link : 'div'
        const onClickHandler = () => (onItemClick ? onItemClick(item) : {})
        const isActive = item.href ? pathname === item.href : false
        return (
          <Wrapper
            key={`chip_item_${item.id}`}
            href={item.href || ''}
            onClick={onClickHandler}
            className={`${s.chip} ${isActive && s.active}`}
          >
            {item.name}
          </Wrapper>
        )
      })}
    </div>
  )
}

export default Chips

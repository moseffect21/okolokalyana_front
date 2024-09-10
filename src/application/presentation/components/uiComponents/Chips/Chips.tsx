import React from 'react'
import s from './Chips.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

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
    <div className={cn(s.container, className || '')}>
      {data.map(item => {
        const Wrapper = item.href ? Link : 'button'
        const onClickHandler = () => (onItemClick ? onItemClick(item) : {})
        const isActive = item.href ? pathname === item.href : false
        return (
          <Wrapper
            key={`chip_item_${item.id}`}
            href={item.href || ''}
            onClick={onClickHandler}
            className={cn(s.chip, { [s.active]: isActive })}
          >
            {item.name}
          </Wrapper>
        )
      })}
    </div>
  )
}

export default Chips

import React from 'react'
import StarGray from 'images/icons/star_gray.svg'
import StarYellow from 'images/icons/star_yellow.svg'
import cn from 'classnames'

import s from './Rating.module.scss'

type RatingProps = {
  value: number
  containerClassName?: string
  className?: string
  activeClassName?: string
  notActiveClassName?: string
  onChange?: (value: number) => void
}

const Rating = ({
  value,
  containerClassName,
  className,
  activeClassName,
  notActiveClassName,
  onChange,
}: RatingProps) => {
  const stars = Array.from(Array(10).keys())
  const handleClick = (value: number) => () => {
    if (onChange) onChange(value)
  }
  return (
    <div className={cn(s.container, containerClassName)}>
      {stars.map(star => {
        const starNum = star + 1
        const active = starNum <= value
        return (
          <div
            className={cn(s.star, className, {
              [s.clickable]: !!onChange,
              [activeClassName || '']: active,
              [notActiveClassName || '']: !active,
            })}
            key={`star_item_${starNum}`}
            onClick={handleClick(starNum)}
          >
            {active ? <StarYellow /> : <StarGray />}
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(Rating)

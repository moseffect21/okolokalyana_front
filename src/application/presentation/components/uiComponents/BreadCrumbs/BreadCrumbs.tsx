import { BreadCrumb } from 'application/domain/types/BreadCrumb'
import React from 'react'
import ArrowSvg from 'images/icons/gray_right_arrow.svg'
import s from './BreadCrumbs.module.scss'
import Link from 'next/link'
import cn from 'classnames'

type BreadCrumbsProps = {
  data: BreadCrumb[]
  containerClassName?: string
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ data, containerClassName }) => {
  return (
    <div className={cn(s.container, containerClassName || '')}>
      {data.map((item, index) => (
        <div className={s.crumb} key={`bread_crumb_${item.id}`}>
          {index !== 0 && (
            <div className={s.arrow}>
              <ArrowSvg />
            </div>
          )}
          <Link
            href={item.link || '#'}
            className={cn(s.link, { [s.disabled]: index === data.length - 1 })}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BreadCrumbs

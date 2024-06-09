import { BreadCrumb } from 'application/domain/types/BreadCrumb'
import React from 'react'
import ArrowSvg from 'images/icons/gray_right_arrow.svg'
import s from './BreadCrumbs.module.scss'
import Link from 'next/link'

type BreadCrumbsProps = {
  data: BreadCrumb[]
  containerClassName?: string
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ data, containerClassName }) => {
  return (
    <div className={`${s.container} ${containerClassName || ''}`}>
      {data.map((item, index) => (
        <div className={s.crumb} key={`bread_crumb_${item.id}`}>
          {index !== 0 && (
            <div className={s.arrow}>
              <ArrowSvg />
            </div>
          )}
          <Link
            href={item.link || '#'}
            className={`${s.link} ${index === data.length - 1 && s.disabled}`}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BreadCrumbs

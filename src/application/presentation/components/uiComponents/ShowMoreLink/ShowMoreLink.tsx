import React from 'react'
import Link from 'next/link'
import BackArrow from 'images/icons/black_right_arrow.svg'
import s from './ShowMoreLink.module.scss'
import cn from 'classnames'

type ShowMoreLinkProps = {
  href?: string
  color?: string
  className?: string
}

const ShowMoreLink: React.FC<ShowMoreLinkProps> = ({ href = '#', color = 'black', className }) => {
  return (
    <div className={cn(s.link_container, className)}>
      <Link href={href} className={cn(s.show_all, s[color])}>
        <span>Перейти к разделу</span>
        <BackArrow className={s.arrow} />
      </Link>
    </div>
  )
}

export default ShowMoreLink

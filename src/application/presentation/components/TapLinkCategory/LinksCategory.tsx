import React from 'react'
import s from './LinksCategory.module.scss'
import { Links } from 'application/domain/entities/links/Link'
import LinkItem from './LinkItem'
import cn from 'classnames'

type Props = {
  title: string
  data: Links
  isTitleHidden?: boolean
  className?: string
}

const LinksCategory = ({ title, data, className, isTitleHidden }: Props) => {
  return (
    <div className={cn(s.container, className)}>
      {!isTitleHidden && <h2 className={s.title}>{title}</h2>}
      {data.map(item => (
        <LinkItem key={item.id} data={item} />
      ))}
    </div>
  )
}

export default LinksCategory

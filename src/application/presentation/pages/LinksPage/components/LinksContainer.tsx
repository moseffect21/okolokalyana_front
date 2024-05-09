import React from 'react'
import s from './LinksContainer.module.scss'
import { Links } from 'application/domain/entities/links/Link'
import LinkItem from './LinkItem'

type Props = {
  title: string
  data: Links
}

const LinksContainer = ({ title, data }: Props) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {data.map(item => (
        <LinkItem key={item.id} data={item} />
      ))}
    </div>
  )
}

export default LinksContainer

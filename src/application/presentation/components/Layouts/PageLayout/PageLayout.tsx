import React from 'react'
import s from './PageLayout.module.scss'

type Props = {
  children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return <div className={s.container}>{children}</div>
}

export default PageLayout

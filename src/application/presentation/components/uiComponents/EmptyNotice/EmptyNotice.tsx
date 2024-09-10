import React from 'react'
import s from './EmptyNotice.module.scss'

type EmptyContainerProps = {
  text: string
}

const EmptyNotice = ({ text }: EmptyContainerProps) => {
  return <div className={s.container}>{text}</div>
}

export default React.memo(EmptyNotice)

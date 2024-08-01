import React from 'react'
import s from './NewsCard.module.scss'

type NewsCardProps = {
  date: string
  title: string
  content: string
}

const NewsCard = ({ date, title, content }: NewsCardProps) => {
  return (
    <div className={s.newCard}>
      <div className={s.newCardDate}>
        <span>{date}</span>
      </div>
      <div className={s.newCardDescription}>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default NewsCard

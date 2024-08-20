import React from 'react'
import HearthSvg from 'images/icons/hearth.svg'
import s from './SocialCounter.module.scss'
import { Article } from 'application/domain/entities/article/Article'

type SocialCounterProps = {
  article: Article
}

const SocialCounter = ({ article }: SocialCounterProps) => {
  //   console.log(article)
  // Тут будет счетчик лайков и комментов
  return <div>SocialCounter</div>
}

export default SocialCounter

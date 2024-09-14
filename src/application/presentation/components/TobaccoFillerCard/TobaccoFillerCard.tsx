import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'
import React from 'react'

import s from './TobaccoFillerCard.module.scss'
import StoredImage from '../uiComponents/StoredImage'
import Rating from '../uiComponents/Rating'
import EmptyPhoto from '../uiComponents/EmptyPhoto'
import Link from 'next/link'
import cn from 'classnames'

type TobaccoFillerCardProps = {
  tobaccoFiller: TobaccoFiller
  containerClassName?: string
}

const TobaccoFillerCard = ({ tobaccoFiller, containerClassName }: TobaccoFillerCardProps) => {
  const {
    id,
    slug,
    bowl,
    brand,
    tobacco,
    name,
    tobacco_line,
    aroma,
    gram,
    aroma_rating,
    objective_rating,
    subjective_rating,
    smoker,
    users_rating,
    video_url,
    warming_time,
    description,
    hookah,
    hookah_block,
    coal,
    coal_placement,
  } = tobaccoFiller

  return (
    <Link className={cn(s.container, containerClassName)} href={`/smokingroom/${slug || id}`}>
      {!!name && <div className={s.title}>{name}</div>}

      <div className={s.inner}>
        <div className={s.left}>
          {tobaccoFiller.photo ? (
            <StoredImage
              src={tobaccoFiller.photo || ''}
              alt=""
              width={100}
              height={100}
              className={s.image}
            />
          ) : (
            <EmptyPhoto />
          )}
        </div>
        <div className={s.right}>
          {!!hookah && (
            <div className={s.row}>
              <div className={s.label}>Кальян</div>
              <div className={s.value}>{hookah.name}</div>
            </div>
          )}
          {!!hookah_block && (
            <div className={s.row}>
              <div className={s.label}>Коллауд</div>
              <div className={s.value}>{hookah_block.name}</div>
            </div>
          )}
          {!!bowl && (
            <div className={s.row}>
              <div className={s.label}>Чаша</div>
              <div className={s.value}>{bowl.name}</div>
            </div>
          )}
          {!!brand && (
            <div className={s.row}>
              <div className={s.label}>Брэнд</div>
              <div className={s.value}>{brand.name}</div>
            </div>
          )}
          {!!tobacco && (
            <div className={s.row}>
              <div className={s.label}>Табак</div>
              <div className={s.value}>{tobacco.name}</div>
            </div>
          )}
          {!!tobacco_line && (
            <div className={s.row}>
              <div className={s.label}>Линейка</div>
              <div className={s.value}>{tobacco_line}</div>
            </div>
          )}
          {!!aroma && (
            <div className={s.row}>
              <div className={s.label}>Вкус</div>
              <div className={s.value}>{aroma}</div>
            </div>
          )}
          {!!subjective_rating && (
            <div className={s.row}>
              <div className={s.label}>Субъективная оценка</div>
              <div className={s.value}>
                <Rating value={subjective_rating} containerClassName={s.stars_container} />
              </div>
            </div>
          )}
          {!!objective_rating && (
            <div className={s.row}>
              <div className={s.label}>Объективная оценка</div>
              <div className={s.value}>
                <Rating value={objective_rating} containerClassName={s.stars_container} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default TobaccoFillerCard

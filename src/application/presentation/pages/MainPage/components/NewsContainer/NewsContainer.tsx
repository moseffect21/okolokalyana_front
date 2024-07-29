import React from 'react'
import s from './NewsContainer.module.scss'

export default function NewsContainer() {
  return (
    <section className={s.newsContainer}>
      <div className={s.newsInner}>
        <div className={s.titleContainer}>
          <h1>
            Последние обновления
            <br />
            ОКОЛОКАЛЬЯНА
          </h1>
        </div>
        <div className={s.newsBlock}>
          <div className={s.newItem}>
            <div className={s.newsItemDate}>
              <span>26.03.2024</span>
            </div>
            <div className={s.newsItemDescription}>
              <h4>Получили на прокур новый premium табак </h4>
              <p>
                Обычная нормальная банка, но открывать очень неудобно. Одну задолбался открывать,
                выломать пришлось.
              </p>
            </div>
          </div>
          <div className={s.newItem}>
            <div className={s.newsItemDate}>
              <span>26.03.2024</span>
            </div>
            <div className={s.newsItemDescription}>
              <h4>Обновили статью</h4>
              <p>
                Заходи, <a href="#">читай</a>, оставляй комментарии.
              </p>
            </div>
          </div>
          <div className={s.newItem}>
            <div className={s.newsItemDate}>
              <span>26.03.2024</span>
            </div>
            <div className={s.newsItemDescription}>
              <h4>Обновили статью</h4>
              <p>
                Обычная нормальная банка, но открывать очень неудобно. Одну задолбался открывать,
                выломать пришлось.
              </p>
            </div>
          </div>
          <div className={s.newItem}>
            <div className={s.newsItemDate}>
              <span>26.03.2024</span>
            </div>
            <div className={s.newsItemDescription}>
              <h4>Обновили статью</h4>
              <p>
                Заходи, <a href="#">читай</a>, оставляй комментарии.
              </p>
            </div>
          </div>
          <div className={s.newItem}>
            <div className={s.newsItemDate}>
              <span>26.03.2024</span>
            </div>
            <div className={s.newsItemDescription}>
              <h4>Получили на прокур новый premium табак </h4>
              <p>
                Обычная нормальная банка, но открывать очень неудобно. Одну задолбался открывать,
                выломать пришлось.
              </p>
            </div>
          </div>
          <div className={s.newItem}>
            <div className={s.newsItemDate}>
              <span>26.03.2024</span>
            </div>
            <div className={s.newsItemDescription}>
              <h4>Получили на прокур новый premium табак </h4>
              <p>
                Обычная нормальная банка, но открывать очень неудобно. Одну задолбался открывать,
                выломать пришлось.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

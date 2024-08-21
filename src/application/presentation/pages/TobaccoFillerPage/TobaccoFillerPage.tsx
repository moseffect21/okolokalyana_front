import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'
import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'

import s from './TobaccoFillerPage.module.scss'
import { fetchTobaccoFiller } from 'application/domain/useCases/smokingroom/getSmokingRoom'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'
import EmptyPhoto from 'application/presentation/components/uiComponents/EmptyPhoto'
import Rating from 'application/presentation/components/uiComponents/Rating'
import Link from 'next/link'
import UserRate from './components/UserRate'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { MetaTobaccoFillerPage } from 'application/presentation/meta/MetaContent'

dayjs.locale('ru')

export const getTobaccoFillerPageServerSideProps = async ({
  params,
}: GetServerSideDefaultProps) => {
  if (!params?.slug) {
    return {
      notFound: true,
    }
  }
  try {
    const data = await fetchTobaccoFiller(params.slug as string)
    return {
      props: {
        tobaccoFiller: data,
      },
    }
  } catch (e) {
    return {
      props: {},
    }
  }
}

type TobaccoFillerPageProps = {
  tobaccoFiller: TobaccoFiller
}

export default function TobaccoFillerPage({ tobaccoFiller }: TobaccoFillerPageProps) {
  const {
    id,
    bowl,
    brand,
    tobacco,
    tobacco_line,
    name,
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
    content,
    updated_at,
  } = tobaccoFiller

  return (
    <>
      <MetaTobaccoFillerPage name={name} />
      <PageLayout
        breadCrumbs={[
          { id: 1, name: 'Прокурочный цех', link: '/smokingroom' },
          { id: 2, name: name },
        ]}
        title={name}
        withBackButton
      >
        <div className={s.container}>
          <div className={s.info}>
            <div className={s.left}>
              {!!brand && (
                <div className={s.row}>
                  <div className={s.label}>Брэнд</div>
                  <div className={s.value}>{brand.name}</div>
                </div>
              )}
              {!!tobacco_line && (
                <div className={s.row}>
                  <div className={s.label}>Линейка</div>
                  <div className={s.value}>{tobacco_line}</div>
                </div>
              )}
              {!!tobacco && (
                <div className={s.row}>
                  <div className={s.label}>Табак</div>
                  <div className={s.value}>{tobacco.name}</div>
                </div>
              )}
              {!!aroma && (
                <div className={s.row}>
                  <div className={s.label}>Вкус</div>
                  <div className={s.value}>{aroma}</div>
                </div>
              )}
              {!!gram && (
                <div className={s.row}>
                  <div className={s.label}>Кол-во</div>
                  <div className={s.value}>{gram} г.</div>
                </div>
              )}
              {!!bowl && (
                <div className={s.row}>
                  <div className={s.label}>Чаша</div>
                  <div className={s.value}>{bowl.name}</div>
                </div>
              )}
              {!!hookah_block && (
                <div className={s.row}>
                  <div className={s.label}>Коллауд</div>
                  <div className={s.value}>{hookah_block.name}</div>
                </div>
              )}
              {!!coal && (
                <div className={s.row}>
                  <div className={s.label}>Угли</div>
                  <div className={s.value}>{coal.name}</div>
                </div>
              )}
              {!!coal_placement && (
                <div className={s.row}>
                  <div className={s.label}>Расстановка углей</div>
                  <div className={s.value}>{coal_placement.name}</div>
                </div>
              )}
              {!!warming_time && (
                <div className={s.row}>
                  <div className={s.label}>Время прогрева</div>
                  <div className={s.value}>{warming_time} мин.</div>
                </div>
              )}

              {!!hookah && (
                <div className={s.row}>
                  <div className={s.label}>Кальян</div>
                  <div className={s.value}>{hookah.name}</div>
                </div>
              )}
              {!!smoker && (
                <div className={s.row}>
                  <div className={s.label}>Прокурщик</div>
                  <div className={s.value}>{smoker.name}</div>
                </div>
              )}
              {!!aroma_rating && (
                <div className={s.row}>
                  <div className={s.label}>Оценка вкуса</div>
                  <div className={s.value}>
                    <Rating value={aroma_rating} containerClassName={s.stars_container} />
                  </div>
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
              {!!users_rating && (
                <div className={s.row}>
                  <div className={s.label}>Пользовательская оценка</div>
                  <div className={s.value}>
                    <Rating value={users_rating} containerClassName={s.stars_container} />
                  </div>
                </div>
              )}
              {!!video_url && (
                <div className={s.row}>
                  <div className={s.label}>Видео</div>
                  <div className={s.value}>
                    <Link href={video_url}>{video_url}</Link>
                  </div>
                </div>
              )}
            </div>
            <div className={s.right}>
              {tobaccoFiller.photo ? (
                <StoredImage
                  src={tobaccoFiller.photo || ''}
                  alt=""
                  width={300}
                  height={300}
                  className={s.image}
                />
              ) : (
                <EmptyPhoto className={s.empty_photo} />
              )}
            </div>
          </div>
          <div className={s.text} dangerouslySetInnerHTML={{ __html: content }}></div>
          <div className={s.date}>{dayjs(updated_at).format('DD MMMM YYYY в HH:mm')}</div>
          <div className={s.bottom_container}>
            <UserRate tobaccoFillerId={id} />
          </div>
        </div>
      </PageLayout>
    </>
  )
}

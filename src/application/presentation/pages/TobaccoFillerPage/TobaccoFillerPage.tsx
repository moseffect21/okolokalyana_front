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
import DetailsMW from 'application/presentation/components/ModalWindows/DetailsMW'

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

  console.log(tobaccoFiller)

  return (
    <>
      <MetaTobaccoFillerPage name={name} />
      <PageLayout
        breadCrumbs={[
          { id: 1, name: 'Главная', link: '/' },
          { id: 2, name: 'Прокурочный цех', link: '/smokingroom' },
          { id: 3, name: name },
        ]}
        title={name}
        withBackButton
      >
        <div className={s.container}>
          <div className={s.info}>
            <div className={s.left}>
              {!!tobacco && (
                <div className={s.row}>
                  <div className={s.label}>Смесь/линейка</div>
                  <div className={s.value}>{tobacco.name}</div>
                </div>
              )}
              {!!aroma && (
                <div className={s.row}>
                  <div className={s.label}>Аромат</div>
                  <div className={s.value}>{aroma}</div>
                </div>
              )}
              {!!bowl && (
                <>
                  <Link href="#bowl" className={s.row}>
                    <div className={s.label}>Чаша</div>
                    <div className={s.value}>{bowl.name}</div>
                  </Link>
                  <DetailsMW
                    hash="bowl"
                    data={{
                      title: bowl.name,
                      photo: bowl.photo,
                    }}
                  />
                </>
              )}
              {!!hookah && (
                <>
                  <Link href="#hookah" className={s.row}>
                    <div className={s.label}>Кальян</div>
                    <div className={s.value}>{hookah.name}</div>
                  </Link>
                  <DetailsMW
                    hash="hookah"
                    data={{
                      title: hookah.name,
                      description: hookah.description,
                      content: hookah.content,
                      photo: hookah.photo,
                      video_url: hookah.video_url,
                    }}
                  />
                </>
              )}
              {!!hookah_block && (
                <>
                  <Link href="#collaud" className={s.row}>
                    <div className={s.label}>Контроллер жара</div>
                    <div className={s.value}>{hookah_block.name}</div>
                  </Link>
                  <DetailsMW
                    hash="collaud"
                    data={{
                      title: hookah_block.name,
                      description: hookah_block.description,
                      content: hookah_block.content,
                      photo: hookah_block.photo,
                      video_url: hookah_block.video_url,
                    }}
                  />
                </>
              )}
              {!!coal && (
                <>
                  <Link href="#coal" className={s.row}>
                    <div className={s.label}>Угли</div>
                    <div className={s.value}>{coal.name}</div>
                  </Link>
                  <DetailsMW
                    hash="coal"
                    data={{
                      title: coal.name,
                      description: coal.description,
                      content: coal.content,
                      photo: coal.photo,
                      video_url: coal.video_url,
                    }}
                  />
                </>
              )}
              {!!coal_placement && (
                <>
                  <Link href="#coal_placement" className={s.row}>
                    <div className={s.label}>Расстановка углей</div>
                    <div className={s.value}>{coal_placement.name}</div>
                  </Link>
                  <DetailsMW
                    hash="coal_placement"
                    data={{
                      title: coal_placement.name,
                      description: coal_placement.description,
                      content: coal_placement.content,
                      photo: coal_placement.photo,
                      video_url: coal_placement.video_url,
                    }}
                  />
                </>
              )}
              {!!gram && (
                <div className={s.row}>
                  <div className={s.label}>Кол-во</div>
                  <div className={s.value}>{gram} г.</div>
                </div>
              )}
              {!!warming_time && (
                <div className={s.row}>
                  <div className={s.label}>Время прогрева</div>
                  <div className={s.value}>{warming_time} мин.</div>
                </div>
              )}
              {!!aroma_rating && (
                <div className={s.row}>
                  <div className={s.label}>Попадание</div>
                  <div className={s.value}>
                    <Rating value={aroma_rating} containerClassName={s.stars_container} />
                  </div>
                </div>
              )}
              {/* {!!brand && (
                <>
                  <Link href="#brand" className={s.row}>
                    <div className={s.label}>Брэнд</div>
                    <div className={s.value}>{brand.name}</div>
                  </Link>
                  <DetailsMW
                    hash="brand"
                    data={{
                      title: brand.name,
                      description: brand.description,
                      content: brand.content,
                      photo: brand.photo,
                      video_url: brand.video_url,
                    }}
                  />
                </>
              )} */}
              {/* {!!tobacco_line && (
                <div className={s.row}>
                  <div className={s.label}>Линейка</div>
                  <div className={s.value}>{tobacco_line}</div>
                </div>
              )} */}
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
              {!!smoker && (
                <div className={s.row}>
                  <div className={s.label}>Прокурщик</div>
                  <div className={s.value}>{smoker.name}</div>
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

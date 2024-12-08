import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import { fetchSmokingRoomFilters } from 'application/domain/useCases/smokingroom/getSmokingRoom'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaSmokingRoomPage } from 'application/presentation/meta/MetaContent'
import React from 'react'
import s from './SmokingRoomPage.module.scss'
import { getFilterOptions } from 'application/domain/useCases/smokingroom/smokingRoomFilterUtils'
import TobaccosContainer from './components/TobaccosContainer'
import BowlsContainer from './components/BowlsContainer'
import HookahBlocksContainer from './components/HookahBlocksContainer'
import HookahBlockListMW from 'application/presentation/components/ModalWindows/HookahBlockListMW'
import TobaccoListMW from 'application/presentation/components/ModalWindows/TobaccoListMW'
import BowlsListMW from 'application/presentation/components/ModalWindows/BowlsListMW'
import { SmokingRoomFilters } from 'application/domain/entities/smokingRoom/SmokingRoomFilters'
import Filters from 'application/presentation/components/Filters'

export const getSmokingRoomPageServerSideProps = async ({ query }: GetServerSideDefaultProps) => {
  try {
    const filters = await fetchSmokingRoomFilters()

    return {
      props: {
        filters,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

type SmokingRoomPageProps = {
  filters: SmokingRoomFilters
}

export default function SmokingRoomPage({ filters }: SmokingRoomPageProps) {
  const breadcrumbs = [
    { id: 1, name: 'Главная', link: '/' },
    { id: 2, name: 'Прокурочный цех' },
  ]
  const {
    top_bowls,
    top_hookah_blocks,
    top_tobaccos,
    bowls_count,
    hookah_blocks_count,
    tobaccos_count,
    bowls,
    hookah_blocks,
    tobaccos,
  } = filters

  const {
    bowlOptions,
    tobaccoOptions,
    hookahBlockOptions,
    subjectiveRateOptions,
    smokersOptions,
    objectiveRateOptions,
  } = getFilterOptions(filters)

  return (
    <>
      <MetaSmokingRoomPage />
      <PageLayout title="Прокурочный цех" breadCrumbs={breadcrumbs}>
        <Filters
          {...{
            bowlOptions,
            tobaccoOptions,
            hookahBlockOptions,
            smokersOptions,
            subjectiveRateOptions,
            objectiveRateOptions,
          }}
        />
        <div className={s.container}>
          {!!top_tobaccos.length && (
            <TobaccosContainer tobaccos={top_tobaccos} total={tobaccos_count} />
          )}
          {!!top_bowls.length && <BowlsContainer bowls={top_bowls} total={bowls_count} />}
          {!!top_hookah_blocks.length && (
            <HookahBlocksContainer hookahBlocks={top_hookah_blocks} total={hookah_blocks_count} />
          )}
        </div>
      </PageLayout>
      <HookahBlockListMW hookahBlocks={hookah_blocks} />
      <TobaccoListMW tobaccos={tobaccos} />
      <BowlsListMW bowls={bowls} />
    </>
  )
}

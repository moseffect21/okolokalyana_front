import React from 'react'
import s from './HookahContainer.module.scss'
import Filters from 'application/presentation/components/Filters'
import { SelectOption } from 'application/presentation/components/uiComponents/InputComponents/Selector/Selector'
import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'
import Fillers from './components/Fillers'
import { DesktopContainer } from 'application/presentation/components/uiComponents/AdaptiveContainers'

type HookahContainerProps = {
  bowlOptions: SelectOption[]
  tobaccoOptions: SelectOption[]
  hookahBlockOptions: SelectOption[]
  subjectiveRateOptions: SelectOption[]
  objectiveRateOptions: SelectOption[]
  smokersOptions: SelectOption[]
  fillers: TobaccoFiller[]
}

const HookahContainer = ({
  bowlOptions,
  tobaccoOptions,
  hookahBlockOptions,
  smokersOptions,
  subjectiveRateOptions,
  objectiveRateOptions,
  fillers,
}: HookahContainerProps) => {
  return (
    <section className={s.container}>
      <div className={s.inner}>
        <div className={s.titleText}>Прокурочный цех</div>
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
        <DesktopContainer>
          <Fillers fillers={fillers} />
        </DesktopContainer>
      </div>
    </section>
  )
}

export default HookahContainer

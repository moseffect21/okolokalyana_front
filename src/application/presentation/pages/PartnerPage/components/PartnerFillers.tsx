import { TobaccoFiller } from 'application/domain/entities/tobaccoFiller/TobaccoFiller'
import TobaccoFillerCard from 'application/presentation/components/TobaccoFillerCard'
import React from 'react'
import s from './PartnerFillers.module.scss'

type PartnerFillersProps = {
  fillers: Array<TobaccoFiller>
}

const PartnerFillers = ({ fillers }: PartnerFillersProps) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Прокуры</div>
      {fillers.map(filler => (
        <TobaccoFillerCard key={`filler_${filler.id}`} tobaccoFiller={filler} />
      ))}
    </div>
  )
}

export default PartnerFillers

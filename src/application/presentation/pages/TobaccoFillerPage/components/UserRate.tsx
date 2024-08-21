import React, { useState } from 'react'
import s from './UserRate.module.scss'
import Rating from 'application/presentation/components/uiComponents/Rating'
import Button from 'application/presentation/components/uiComponents/Button'
import { rateTobaccoFiller } from 'application/domain/useCases/smokingroom/getSmokingRoom'
import { checkIfTobaccoFillerRated } from 'application/domain/useCases/smokingroom/smokingRoomUtils'

type UserRateProps = {
  tobaccoFillerId: number
}

const UserRate = ({ tobaccoFillerId }: UserRateProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [value, setValue] = useState<number>(0)
  const [rated, setRated] = useState<boolean>(checkIfTobaccoFillerRated(tobaccoFillerId))
  const handleRateClick = () => {
    if (!value || rated) {
      return
    }
    setIsLoading(true)
    rateTobaccoFiller({
      tobacco_filler: tobaccoFillerId,
      rate: value,
    })
      .then(() => {
        setRated(true)
      })
      .catch(() => {})
      .finally(() => setIsLoading(false))
  }
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.title}>Ваша оценка</div>
        <div className={s.stars}>
          <Rating
            value={value}
            onChange={setValue}
            className={s.star}
            notActiveClassName={s.not_active_star}
          />
        </div>
        {rated && <div className={s.notice}>Спасибо за вашу оценку!</div>}
      </div>
      {!rated && (
        <div className={s.right}>
          <Button isLoading={isLoading} onClick={handleRateClick}>
            Оценить
          </Button>
        </div>
      )}
    </div>
  )
}

export default UserRate

import React from 'react'
import s from './PageLayout.module.scss'
import { BreadCrumb } from 'application/domain/types/BreadCrumb'
import BreadCrumbs from '../../uiComponents/BreadCrumbs'
import BackSvg from 'images/icons/back_arrow.svg'
import { useRouter } from 'next/router'

type Props = {
  children: React.ReactNode
  breadCrumbs?: BreadCrumb[]
  title?: string
  withBackButton?: boolean
  rightComponent?: React.ReactNode
}

const PageLayout: React.FC<Props> = ({
  children,
  breadCrumbs,
  title,
  withBackButton,
  rightComponent,
}) => {
  const router = useRouter()
  return (
    <div className={s.container}>
      {!!breadCrumbs && <BreadCrumbs data={breadCrumbs} containerClassName={s.breadCrumbs} />}
      {withBackButton && (
        <button className={s.back_btn} onClick={router.back}>
          <BackSvg />
        </button>
      )}
      <div className={s.title_container}>
        {!!title && <h1 className={s.title}>{title}</h1>}
        {!!rightComponent && <div className={s.right_container}>{rightComponent}</div>}
      </div>

      {children}
    </div>
  )
}

export default PageLayout

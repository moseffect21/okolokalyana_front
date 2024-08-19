import React from 'react'

import cn from 'classnames'
import s from './AdaptiveContainers.module.scss'

type Props = {
  children: React.ReactNode
  className?: string
}

const MobileContainer = ({ children, className }: Props) => {
  return <div className={cn(s.mobile_container, className || '')}>{children}</div>
}

export default React.memo(MobileContainer)

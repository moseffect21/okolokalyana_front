import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import cn from 'classnames'

import s from './Loader.module.scss'

type Props = {
  color?: string
  size?: number
  containerClassName?: string
  withoutMargin?: boolean
}

const Loader = ({ color, size, containerClassName, withoutMargin }: Props) => {
  return (
    <div
      className={cn(
        s.loader_container,
        { [s.without_margin]: withoutMargin },
        containerClassName || '',
      )}
    >
      <RotatingLines
        strokeColor={color || '#ffffff'}
        strokeWidth="4"
        animationDuration="0.75"
        width={`${size}` || '32'}
        visible={true}
      />
    </div>
  )
}

export default React.memo(Loader)

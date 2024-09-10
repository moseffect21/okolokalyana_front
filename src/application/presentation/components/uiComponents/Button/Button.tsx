import Link from 'next/link'
import React from 'react'
import s from './Button.module.scss'
import cn from 'classnames'
import { RotatingLines } from 'react-loader-spinner'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  containerClassName?: string
  className?: string
  onClick?: () => void
  color?: 'black' | 'fiol'
  isLoading?: boolean
}

const Button = ({
  children,
  href,
  containerClassName,
  className,
  onClick,
  color = 'black',
  isLoading,
}: ButtonProps) => {
  const Wrapper = href ? Link : 'button'
  return (
    <div className={cn(s.container, containerClassName || '')}>
      <Wrapper
        href={href || '#'}
        className={cn(s.btn, s[color], className || '', { [s.disabled]: isLoading })}
        onClick={onClick}
      >
        {isLoading ? (
          <RotatingLines
            visible={true}
            width="16"
            strokeWidth="5"
            strokeColor="#fff"
            animationDuration="0.75"
          />
        ) : (
          children
        )}
      </Wrapper>
    </div>
  )
}

export default Button

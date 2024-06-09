import Link from 'next/link'
import React, { useMemo } from 'react'
import s from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  containerClassName?: string
  className?: string
  onClick?: () => void
}

const Button = ({ children, href, containerClassName, className, onClick }: ButtonProps) => {
  const Wrapper = href ? Link : 'button'
  return (
    <div className={`${s.container} ${containerClassName || ''}`}>
      <Wrapper href={href || '#'} className={`${s.btn} ${className || ''}`} onClick={onClick}>
        {children}
      </Wrapper>
    </div>
  )
}

export default Button

import Link from 'next/link'
import React from 'react'
import s from './Button.module.scss'
import cn from 'classnames'

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
    <div className={cn(s.container, containerClassName || '')}>
      <Wrapper href={href || '#'} className={cn(s.btn, className || '')} onClick={onClick}>
        {children}
      </Wrapper>
    </div>
  )
}

export default Button

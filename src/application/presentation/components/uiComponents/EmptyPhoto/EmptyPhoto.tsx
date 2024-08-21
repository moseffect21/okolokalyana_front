import React from 'react'
import cn from 'classnames'
import s from './EmptyPhoto.module.scss'

type EmptyPhotoProps = {
  className?: string
}

const EmptyPhoto = ({ className }: EmptyPhotoProps) => {
  return <div className={cn(s.empty_photo, className)}>Нет фото</div>
}

export default EmptyPhoto

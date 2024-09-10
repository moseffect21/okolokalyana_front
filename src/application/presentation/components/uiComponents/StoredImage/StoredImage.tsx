import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import apiClient from 'application/data/apiClient'
import cn from 'classnames'
import s from './StoredImage.module.scss'

type StoredImageProps = ImageProps & {
  src: string
  className?: string
  width: number
  height: number
}

const StoredImage: React.FC<StoredImageProps> = ({ src, alt, className, ...props }) => {
  const [status, setStatus] = useState<string>('loading')
  const { baseURL } = apiClient.defaults
  const imageUrl = baseURL?.endsWith('/')
    ? `${apiClient.defaults.baseURL}storage/${src}`
    : `${apiClient.defaults.baseURL}/storage/${src}`

  const isLoaded = status === 'completed'
  const isError = status === 'error'

  return (
    <div className={cn(s.container, className)}>
      <Image
        {...props}
        src={imageUrl}
        alt={alt || ''}
        className={className}
        onLoadingComplete={() => setStatus('completed')}
        onError={() => setStatus('error')}
      />
      {isError && <div className={s.placeholder}>Нет фото</div>}
    </div>
  )
}

export default StoredImage

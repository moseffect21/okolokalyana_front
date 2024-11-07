import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import cn from 'classnames'
import s from './StoredImage.module.scss'
import generateImageUrl from 'application/domain/utils/generateImageUrl'

type StoredImageProps = ImageProps & {
  src: string
  className?: string
  width: number
  height: number
}

const StoredImage: React.FC<StoredImageProps> = ({ src, alt, className, ...props }) => {
  const [status, setStatus] = useState<string>('loading')
  const imageUrl = generateImageUrl(src)

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

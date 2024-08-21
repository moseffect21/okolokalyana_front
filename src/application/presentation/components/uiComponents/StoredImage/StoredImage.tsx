import React from 'react'
import Image, { ImageProps } from 'next/image'
import apiClient from 'application/data/apiClient'

type StoredImageProps = ImageProps & {
  src: string
  className?: string
  width: number
  height: number
}

const StoredImage: React.FC<StoredImageProps> = ({ src, alt, className, ...props }) => {
  const { baseURL } = apiClient.defaults
  const imageUrl = baseURL?.endsWith('/')
    ? `${apiClient.defaults.baseURL}storage/${src}`
    : `${apiClient.defaults.baseURL}/storage/${src}`

  return <Image {...props} src={imageUrl} alt={alt || ''} className={className} />
}

export default StoredImage

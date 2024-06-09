import React from 'react'
import Image, { ImageProps } from 'next/image'
import apiClient from 'application/data/apiClient'

type StoredImageProps = ImageProps & {
  src: string
}

const StoredImage: React.FC<StoredImageProps> = ({ src, alt, ...props }) => {
  return <Image {...props} src={`${apiClient.defaults.baseURL}storage/${src}`} alt={alt || ''} />
}

export default StoredImage

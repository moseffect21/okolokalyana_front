import React, { useState } from 'react'
import s from './ProductGallery.module.scss'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'

type ProductGalleryProps = {
  images: string | null
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const parsedImages: Array<string> = images ? JSON.parse(images) : []
  const [activeImage, setActiveImage] = useState<string>(parsedImages.length ? parsedImages[0] : '')

  const onThumbClickHandler = (image: string) => setActiveImage(image)

  return (
    <div className={s.container}>
      <div className={s.thumbs}>
        {parsedImages.map(image => (
          <StoredImage
            key={image}
            src={image}
            alt=""
            width={94}
            height={94}
            className={s.thumb}
            onClick={() => onThumbClickHandler(image)}
          />
        ))}
      </div>
      <div className={s.photo}>
        <StoredImage src={activeImage} alt="" width={300} height={300} />
      </div>
    </div>
  )
}

export default React.memo(ProductGallery)

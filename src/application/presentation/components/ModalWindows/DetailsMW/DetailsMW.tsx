import React, { useMemo } from 'react'
import ModalWindow from '../ModalWindow'
import s from './DetailsMW.module.scss'
import { useRouter } from 'next/router'
import StoredImage from '../../uiComponents/StoredImage'
import Link from 'next/link'

type DetailsMWProps = {
  hash: string
  data: {
    title?: string | null
    description?: string | null
    content?: string | null
    photo?: string | null
    video_url?: string | null
  }
}

const DetailsMW = ({ hash, data }: DetailsMWProps) => {
  const { asPath, back } = useRouter()

  const { title, description, content, photo, video_url } = data

  const opened = useMemo(() => {
    const currentHash = asPath.split('#')[1]
    return currentHash === hash
  }, [asPath, hash])

  const onClose = () => back()

  return (
    <ModalWindow
      opened={opened}
      setOpened={onClose}
      onRequestClose={onClose}
      isLarge
      modalClassName={s.modal}
    >
      {!!title && <div className={s.title}>{title}</div>}
      {!!photo && (
        <div className={s.photo_container}>
          <StoredImage src={photo} alt="" width={500} height={300} className={s.photo} />
        </div>
      )}
      {!!description && <div className={s.description}>{description}</div>}
      {!!video_url && (
        <Link href={video_url} className={s.video_url}>
          {video_url}
        </Link>
      )}
      {!!content && <div className={s.content} dangerouslySetInnerHTML={{ __html: content }} />}
    </ModalWindow>
  )
}

export default DetailsMW

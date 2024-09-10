import React from 'react'
import ReactModal from 'react-modal'
import CloseSvg from 'images/icons/close_icon.svg'
import cn from 'classnames'
import s from './ModalWindow.module.scss'

type ModalWindowProps = {
  opened: boolean
  setOpened: (val: boolean) => void
  children: React.ReactNode
  isLarge?: boolean
  notFull?: boolean
  withoutCloseBtn?: boolean
  onRequestClose?: () => void
}

const ModalWindow = ({
  opened,
  setOpened,
  notFull,
  children,
  onRequestClose,
  withoutCloseBtn,
  isLarge,
}: ModalWindowProps) => {
  const closeMW = () => setOpened(false)
  return (
    <ReactModal
      closeTimeoutMS={300}
      isOpen={opened}
      onRequestClose={onRequestClose}
      overlayClassName={s.overlay}
      className={cn(s.modal_window, { [s.not_full]: notFull, [s.large]: isLarge })}
    >
      <>
        {!withoutCloseBtn && (
          <button className={s.closeBtn} onClick={closeMW}>
            <CloseSvg />
          </button>
        )}

        {children}
      </>
    </ReactModal>
  )
}

export default ModalWindow

import { useEffect } from 'react'

const useOutsideClick = (ref: any, setOpened: Function) => {
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpened(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [ref, setOpened])
}

export default useOutsideClick

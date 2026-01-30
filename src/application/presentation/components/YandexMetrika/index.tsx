import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { METRIKA_ID } from 'application/presentation/constants/config'

export default function YandexMetrika() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}${searchParams ? `?${searchParams}` : ''}`
    //@ts-ignore
    ym(METRIKA_ID, 'hit', url)
    console.log(url)
  }, [pathname, searchParams])

  return null
}

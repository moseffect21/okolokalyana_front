import React, { useMemo } from 'react'
import s from './Pagination.module.scss'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import cn from 'classnames'

type PaginationProps = {
  page: number
  total: number
  perPage?: number
  className?: string
}

const Pagination = ({ page, total, perPage = 15, className }: PaginationProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const pagesCount = Math.ceil(total / perPage)
  const pages = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString())
    let links = []
    if (pagesCount > 1) {
      if (page > 1) {
        params.set('page', `${page - 1}`)
        links.push({ id: 'prev', url: `${pathname}?${params.toString()}`, name: '<' })
      }
      for (let i = 1; i <= pagesCount; i++) {
        if (i <= page + 2 && i >= page - 2) {
          params.set('page', `${i}`)
          links.push({ id: `link_${i}`, url: `${pathname}?${params.toString()}`, name: `${i}` })
        }
      }
      if (page !== pagesCount) {
        params.set('page', `${page + 1}`)
        links.push({ id: 'next', url: `${pathname}?${params.toString()}`, name: '>' })
      }
    }

    return links
  }, [page, pagesCount, pathname, searchParams])

  return (
    <div className={cn(s.container, className)}>
      {pages.map(link => {
        const isActive = page === parseInt(link.name, 10)
        return (
          <Link
            key={`link_item_${link.id}`}
            href={link.url}
            className={cn(s.link, { [s.active]: isActive })}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}

export default Pagination

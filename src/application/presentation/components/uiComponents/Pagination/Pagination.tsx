import React, { useMemo } from 'react'
import s from './Pagination.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type PaginationProps = {
  page: number
  total: number
  perPage?: number
}

const Pagination = ({ page, total, perPage = 15 }: PaginationProps) => {
  const pathname = usePathname()
  const pagesCount = Math.ceil(total / perPage)
  const pages = useMemo(() => {
    let links = []
    if (pagesCount > 1) {
      if (page > 1) {
        links.push({ id: 'prev', url: `${pathname}?page=${page - 1}`, name: '<' })
      }
      for (let i = 1; i <= pagesCount; i++) {
        if (i <= page + 2 && i >= page - 2) {
          links.push({ id: `link_${i}`, url: `${pathname}?page=${i}`, name: `${i}` })
        }
      }
      if (page !== pagesCount) {
        links.push({ id: 'next', url: `${pathname}?page=${page + 1}`, name: '>' })
      }
    }

    return links
  }, [page, pagesCount, pathname])

  return (
    <div className={s.container}>
      {pages.map(link => {
        const isActive = page === parseInt(link.name, 10)
        return (
          <Link
            key={`link_item_${link.id}`}
            href={link.url}
            className={`${s.link} ${isActive && s.active}`}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}

export default Pagination

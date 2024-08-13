export type Pagination<T> = {
  current_page: number
  data: T
  first_page_url: string | null
  from: number
  last_page: number
  last_page_url: string | null
  next_page_url: string | null
  path: string | null
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
  links: PaginationLink[]
}

type PaginationLink = {
  active: boolean
  label: string
  url: string | null
}

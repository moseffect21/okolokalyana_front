import React, { useEffect, useRef, useState } from 'react'
import CloseSvg from 'images/icons/white_close.svg'
import s from './SearchMW.module.scss'
import { fetchSearch } from 'application/domain/useCases/search/search'
import Loader from '../../uiComponents/Loader'
import SearchItem from './components/SearchItem'
import { Article } from 'application/domain/entities/article/Article'
import { Router } from 'next/router'
import cn from 'classnames'
import useOutsideClick from 'application/domain/utils/useOutsideClick'

type SearchMWProps = {
  opened: boolean
  setOpened: (val: boolean) => void
}

const controller = new AbortController()

export default function SearchMW({ opened, setOpened }: SearchMWProps) {
  const inputRef = useRef<any>()
  const delayTimer = useRef<any>()
  const containerRef = useRef<any>()
  useOutsideClick(containerRef, setOpened)
  const [value, setValue] = useState<string>('')
  const [searchIsLoading, setSearchIsLoading] = useState<boolean>(false)
  const [searchResult, setSearchResult] = useState<Article[]>([])
  const closeMW = () => {
    setOpened(false)
    setTimeout(() => {
      setValue('')
      setSearchResult([])
    }, 300)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [opened])

  useEffect(() => {
    if (delayTimer && delayTimer.current) {
      clearTimeout(delayTimer.current)
    }
    if (value) {
      setSearchIsLoading(true)
      controller.abort()
      delayTimer.current = setTimeout(async () => {
        try {
          const searchData = await fetchSearch(value, controller)
          setSearchResult(Array.isArray(searchData) ? searchData : [])
        } catch (e) {
          setSearchResult([])
        }
        setSearchIsLoading(false)
      }, 300)
    } else {
      setSearchResult([])
      setSearchIsLoading(false)
    }
  }, [value])

  useEffect(() => {
    const handleRouteDone = () => closeMW()
    Router.events.on('routeChangeComplete', handleRouteDone)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteDone)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={cn(s.container, { [s.opened]: opened })} ref={containerRef}>
      <button className={s.close_btn} onClick={closeMW}>
        <CloseSvg />
      </button>
      <input
        className={s.input}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Введите запрос"
        ref={inputRef}
      />
      {searchIsLoading ? (
        <Loader size={32} />
      ) : (
        !!value && (
          <div className={s.result}>
            <div className={s.title}>Результаты поиска:</div>
            {searchResult && searchResult.length ? (
              searchResult.map(item => <SearchItem key={`search_item_${item.id}`} data={item} />)
            ) : (
              <div className={s.not_found}>Ничего не найдено</div>
            )}
          </div>
        )
      )}
    </div>
  )
}

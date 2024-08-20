import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'
import { ArticleCategory } from 'application/domain/entities/article/ArticleCategory'
import {
  fetchArticleCategory,
  getArticleCategorySubcategories,
} from 'application/domain/useCases/article/getArticle'
import { MetaArticleCategoryPage } from 'application/presentation/meta/MetaContent'
import ArticlesContainer from './components/ArticlesContainer'
import 'dayjs/locale/ru'
import dayjs from 'dayjs'
import VideosContainer from './components/VideosContainer'
import getCategoryName from 'application/domain/useCases/category/getCategoryName'
import Pagination from 'application/presentation/components/uiComponents/Pagination'
import checkPageNumber from 'application/domain/utils/checkPageNumber'
import s from './ArticleCategoryPage.module.scss'
import Chips from 'application/presentation/components/uiComponents/Chips'
import Selector from 'application/presentation/components/uiComponents/InputComponents/Selector'
import { usePathname, useRouter } from 'next/navigation'
import EmptyNotice from 'application/presentation/components/uiComponents/EmptyNotice'
import { SelectOption } from 'application/presentation/components/uiComponents/InputComponents/Selector/Selector'

dayjs.locale('ru')

export const getArticleCategoryPageServerSideProps = async ({
  params,
  query,
}: GetServerSideDefaultProps) => {
  if (!params?.category) {
    return {
      notFound: true,
    }
  }
  try {
    const categories = await getArticleCategorySubcategories(params.category as string)
    const page = query.page ? parseInt(query.page as string, 10) : 1
    const sort = query.sort ? (query.sort as string) : null
    const articleCategory = await fetchArticleCategory(params.category as string, page, { sort })
    const { current_page, last_page, total } = articleCategory.articles
    if (!checkPageNumber(current_page, last_page)) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        category: params.category,
        articleCategory,
        page: current_page,
        total,
        categories,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

const sortOptions = [
  { label: 'По рейтингу', value: 'sort=view_count' },
  { label: 'По обновлению', value: 'sort=updated_at' },
  { label: 'По дате публикации', value: 'sort=created_at' },
  { label: 'По названию', value: 'sort=title&sort_direction=asc' },
]

type ArticleCategoryPageProps = {
  category: string
  articleCategory: ArticleCategory
  page: number
  total: number
  categories: ArticleCategory[]
}

export default function ArticleCategoryPage({
  category,
  articleCategory,
  page,
  total,
  categories,
}: ArticleCategoryPageProps) {
  const router = useRouter()
  const pathname = usePathname()
  const title = getCategoryName(category)
  const chips =
    categories?.map(item => ({
      id: item.id,
      name: item.name,
      href: `/blog/${item.slug}`,
    })) || []

  const onSortChange = (value: SelectOption) => {
    router.replace(`${pathname}?${value.value}&page=1`)
  }

  return (
    <>
      <MetaArticleCategoryPage articleCategory={articleCategory} />
      <PageLayout
        title={title}
        breadCrumbs={[{ id: 1, name: title }]}
        rightComponent={
          <Selector options={sortOptions} onChange={onSortChange} placeholder="Сортировка" />
        }
      >
        <div className={s.nav_container}>
          <Chips data={chips} />
          <Pagination page={page} total={total} />
        </div>
        {total === 0 ? (
          <EmptyNotice text="По вашему запросу ничего не найдено" />
        ) : (
          <>
            {category === 'video' ? (
              <VideosContainer articleCategory={articleCategory} />
            ) : (
              <ArticlesContainer articleCategory={articleCategory} />
            )}
          </>
        )}
      </PageLayout>
    </>
  )
}

import { Article } from '../entities/article/Article'

export type GetArticleResponse = {
  article: Article
  random: Array<Article>
}

import { Articles } from '../article/Article'
import { Partners } from '../partners/Partner'
import { Product } from '../product/Product'
import { Team } from '../team/Team'
import { TobaccoFiller } from '../tobaccoFiller/TobaccoFiller'

export type MainData = {
  articles: Articles
  fillers: TobaccoFiller[]
  partners: Partners
  products: Product[]
  team: Team
  updates: Articles
}

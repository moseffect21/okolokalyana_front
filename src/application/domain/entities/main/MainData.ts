import { Articles } from "../article/Article"
import { Partners } from "../partners/Partner"
import { Product } from "../product/Product"
import { Team } from "../team/Team"

export type MainData = {
    articles: Articles
    fillers:[]
    partners: Partners
    products: Product[]
    team: Team
    updates: Articles
}
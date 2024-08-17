import { Articles } from "../article/Article"
import { Partners } from "../partners/Partner"
import { Team } from "../team/Team"
import { Videos } from "../videos/Videos"

export type MainData = {
    articles: Articles
    partners: Partners
    product_categories: []
    team: Team
    videos: Videos
}
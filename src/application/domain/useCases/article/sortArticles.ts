import { Article, Articles } from '../../entities/article/Article'
import splitByThree from '../../utils/splitByThree'

export const sortArticles = (arr: Articles) => {
  const newArr: Array<Articles> = []
  let c = 0
  arr.map((item, i: number) => {
    if (!newArr[c]) newArr[c] = []
    newArr[c].push(item)
    if (i !== 0 && (i + 1) % 4 === 0) {
      c++
    }
  })
  return newArr
}

export const sortVideos = (videoArr: Articles) => {
  const newArr: Array<{ long: Article | null; short: Articles | null }> = []
  let c = 0

  const data = splitByThree<Article>(videoArr)

  data.map(item => {
    newArr[c] = { long: item[0], short: null }
    if (item[1] && item[2]) {
      newArr[c].short = [item[1], item[2]]
    } else if (item[1]) {
      newArr[c].short = [item[1]]
    }
    c++
  })
  return newArr
}

function groupByAlphabet<T extends { name: string }>(array: T[]): { [key: string]: T[] } {
  let resultObj: any = {}

  for (let i = 0; i < array.length; i++) {
    let currentWord = array[i].name
    let firstChar = currentWord[0].toLowerCase()
    let innerArr = []
    if (resultObj[firstChar] === undefined) {
      innerArr.push(array[i])
      resultObj[firstChar] = innerArr
    } else {
      resultObj[firstChar].push(array[i])
    }
  }
  return resultObj
}

export default groupByAlphabet

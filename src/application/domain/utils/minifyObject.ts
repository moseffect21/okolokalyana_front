// Функция для удаление не используемых полей объекта
function minifyObject<T extends { [key: string]: any }>(obj: T, keys: string[]) {
  let newObj: { [key: string]: any } = {}
  keys.map(item => {
    newObj[`${item}`] = obj[`${item}`]
  })
  return newObj
}

export default minifyObject

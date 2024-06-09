// Функция для удаление не используемых полей объекта
function minifyObject<T extends { [key: string]: number | string | null }>(obj: T, keys: string[]) {
  let newObj: { [key: string]: number | string | null } = {}
  keys.map(item => {
    newObj[`${item}`] = obj[`${item}`]
  })
  return newObj
}

export default minifyObject

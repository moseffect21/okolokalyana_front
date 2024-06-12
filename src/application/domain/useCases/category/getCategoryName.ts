const getCategoryName = (slug: string) => {
  switch (slug) {
    case 'video':
      return 'Видео'
    case 'articles':
      return 'Статьи'
    default:
      return 'Статьи'
  }
}
export default getCategoryName

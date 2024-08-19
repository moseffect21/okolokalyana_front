const checkPageNumber = (current_page: number, last_page: number): boolean => {
  return current_page <= last_page && current_page > 0
}

export default checkPageNumber

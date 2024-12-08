export const checkIfTobaccoFillerRated = (tobacco_filler_id: number | string) => {
  if (typeof window !== 'undefined') {
    const savedRates = localStorage.getItem('tobacco_filler_rates')
    if (savedRates) {
      const rates = JSON.parse(savedRates)
      const findedRate = rates[`${tobacco_filler_id}`]
      return !!findedRate
    }
  }
  return false
}

export const getTobaccoFillerRate = (tobacco_filler_id: number | string) => {
  if (typeof window !== 'undefined') {
    const savedRates = localStorage.getItem('tobacco_filler_rates')
    if (savedRates) {
      const rates = JSON.parse(savedRates)
      const findedRate = rates[`${tobacco_filler_id}`]
      return !!findedRate ? parseInt(findedRate, 10) : 0
    }
  }
  return 0
}

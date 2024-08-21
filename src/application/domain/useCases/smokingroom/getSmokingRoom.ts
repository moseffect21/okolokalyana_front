import {
  fetchSmokingRoomFiltersRequest,
  fetchSmokingRoomRequest,
  fetchTobaccoFillerRequest,
  rateTobaccoFillerRequest,
} from 'application/data/api/smokingroom'

export const fetchSmokingRoomFilters = fetchSmokingRoomFiltersRequest
export const fetchSmokingRoom = fetchSmokingRoomRequest
export const fetchTobaccoFiller = fetchTobaccoFillerRequest

export const rateTobaccoFiller = async (sendData: {
  tobacco_filler: number
  rate: number
  user?: number
}) => {
  try {
    const data = await rateTobaccoFillerRequest(sendData)

    const savedRates = localStorage.getItem('tobacco_filler_rates')
    if (savedRates) {
      const rates: any = JSON.parse(savedRates)
      rates[`${sendData.tobacco_filler}`] = sendData.rate
      localStorage.setItem('tobacco_filler_rates', JSON.stringify(rates))
    } else {
      const rates = {
        [`${sendData.tobacco_filler}`]: sendData.rate,
      }
      localStorage.setItem('tobacco_filler_rates', JSON.stringify(rates))
    }
    return data
  } catch (e) {
    return e
  }
}

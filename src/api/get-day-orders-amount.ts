import { api } from '@/lib/axios'

export interface GetDayOrdersAmountParams {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountParams>(
    '/metrics/day-orders-amount',
  )

  return response.data
}

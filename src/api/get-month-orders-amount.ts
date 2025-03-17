import { api } from '@/lib/axios'

export interface GetMonthOrdersAmountParams {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountParams>(
    '/metrics/month-orders-amount',
  )

  return response.data
}

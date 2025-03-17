import { api } from '@/lib/axios'

export interface GetMonthCanceledOrdersAmountParamms {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<GetMonthCanceledOrdersAmountParamms>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}

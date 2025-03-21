import { api } from '@/lib/axios'

export interface GetMonthRevenueParams {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenueParams>(
    '/metrics/month-receipt',
  )

  return response.data
}

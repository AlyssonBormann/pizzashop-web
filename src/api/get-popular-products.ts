import { api } from "@/lib/axios";

export type GetPopularProductsParams = {
  product: string
  amount: number
}[]

export async function getPopularProducts(){
  const response = await api.get<GetPopularProductsParams>('/metrics/popular-products')

  return response.data
}
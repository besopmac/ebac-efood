import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../types/Restaurante'
import { PurchasePayload, PurchaseResponse } from '../types/PurchasePayload'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (payload) => ({
        url: 'checkout',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteQuery,
  usePurchaseMutation
} = api

export default api

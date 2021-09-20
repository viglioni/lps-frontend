/* eslint-disable camelcase */
import { DateString, Url } from './aliases'

export type LPrequest = {
  id: number
  artist: string
  name: string
  purchase_date: DateString
  value: string
  released: DateString
  cover_url: Url
  sale_price: string
}

export type LPsRequest = LPrequest[]

export type LP = {
  id: number
  artist: string
  name: string
  purchaseDate: Date
  value: string
  released: Date
  coverUrl: Url
  salePrice?: string
}

export type LPs = LP[]

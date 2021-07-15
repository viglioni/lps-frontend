import { Url } from './aliases'

export type LP = {
  id: number
  artist: string
  name: string
  purchase_date: Date
  value: string
  year: number
  cover_url: Url
}

export type LPs = LP[]

import axios, { AxiosResponse } from 'axios'
import { LPs } from '../shared/types/lps'
import { endpoints, getBaseUrl } from './constants'

export function getAllLPs(): Promise<AxiosResponse<{ LPs: LPs }>> {
  const urlBase = getBaseUrl()
  return axios.get(urlBase + endpoints.ALL_LPS)
}

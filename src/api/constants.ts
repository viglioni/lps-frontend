import getConfig from 'next/config'
import { Url } from '../shared/types/aliases'

const baseUrlDev = 'http://localhost:1337'
const baseUrlProd = 'https://lps-backend.herokuapp.com'

export enum Endpoint {
  ALL_LPS = '/lps',
  ALL_FOR_SALE = '/lps/for-sale',
  RANDOM = '/lps/random',
}

export function getBaseUrl(): Url {
  const config = getConfig()
  return config.publicRuntimeConfig?.env === 'dev' ? baseUrlDev : baseUrlProd
}

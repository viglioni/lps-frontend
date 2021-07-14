import getConfig from 'next/config'
import { Url } from '../shared/types/aliases'

const baseUrlDev = 'http://localhost:1337'
const baseUrlProd = 'https://lps-backend.herokuapp.com'

export enum endpoints {
  ALL_LPS = '/lps',
}

export function getBaseUrl(): Url {
  const config = getConfig()
  return config.publicRuntimeConfig?.env === 'dev' ? baseUrlDev : baseUrlProd
}

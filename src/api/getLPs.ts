import axios from 'axios'
import { pipe } from 'fp-ts/lib/function'
import * as TE from 'fp-ts/TaskEither'
import * as R from 'ramda'
import { lpAdapter } from '../shared/adapters/lp.adapter'
import { LPs, LPsRequest } from '../shared/types/lps'
import { Endpoint, getBaseUrl } from './constants'

const getLPs = (endpoint: Endpoint) => (): TE.TaskEither<Error, LPs> => {
  const urlBase = getBaseUrl()
  return pipe(
    TE.tryCatch(
      () => axios.get<LPsRequest>(urlBase + endpoint),
      e => (e instanceof Error ? e : new Error(R.toString(e))),
    ),
    TE.map(body => body.data),
    TE.map(lpAdapter.adaptEntities),
  )
}

export const getAllLPs = getLPs(Endpoint.ALL_LPS)
export const getAllForSale = getLPs(Endpoint.ALL_FOR_SALE)

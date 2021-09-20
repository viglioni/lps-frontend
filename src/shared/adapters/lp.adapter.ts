import * as A from 'fp-ts/Array'
import { LP, LPrequest } from '../types/lps'

function adaptEntity(lpRequest: LPrequest): LP {
  return {
    name: lpRequest.name,
    artist: lpRequest.artist,
    value: lpRequest.value,
    salePrice: lpRequest.sale_price,
    id: lpRequest.id,
    released: new Date(lpRequest.released),
    purchaseDate: new Date(lpRequest.purchase_date),
    coverUrl: lpRequest.cover_url,
  }
}

const adaptEntities = A.map(adaptEntity)

export const lpAdapter = {
  adaptEntity,
  adaptEntities,
}

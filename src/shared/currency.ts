import * as R from 'ramda'

export const formatBRL: (str: string) => string = R.concat('R$ ')

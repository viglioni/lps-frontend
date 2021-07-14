import {
  always,
  compose,
  concat,
  equals,
  ifElse,
  map,
  reduce,
  toString,
  unapply,
} from 'ramda'

export const isString = (element: unknown) => equals(typeof element, 'string')

export const convertToString = (el: unknown): string =>
  ifElse(isString, always(el), () => toString(el))(el)

export const concatAll = unapply(
  compose(
    reduce<string, string>(concat, ''),
    map<unknown, string>(convertToString),
  ),
)

export function toDate(date: Date): string {
  const d = new Date(date)
  return concatAll(d.getDay(), '/', d.getMonth(), '/', d.getFullYear())
}

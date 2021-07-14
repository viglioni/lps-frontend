import {
  all,
  always,
  compose,
  equals,
  identity,
  ifElse,
  not,
  unapply,
} from 'ramda'
import { ReactElement } from 'react'

/*
 * Basic logic
 */

export const notEquals = (a: unknown, b: unknown) => compose(not, equals(a))(b)

export const allTruthy = unapply(all(identity))

/*
 * Returns component if condition
 */
export const showIf = (condition: boolean) => (
  component: ReactElement,
): ReactElement | null =>
  ifElse(identity, always(component), always(null))(condition)

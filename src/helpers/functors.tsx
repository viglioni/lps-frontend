import React from 'react'
import { map } from 'ramda'

type Key = string | number
type ElementType<Props> = (props: Props & { key: Key }) => JSX.Element

export function mapToComponent<Props>(
  propsList: Props[],
  Component: ElementType<Props>,
  key?: Key,
): JSX.Element[] {
  return map(
    props => <Component {...props} key={key || Math.random()} />,
    propsList,
  )
}

import { Theme, useMediaQuery } from '@material-ui/core'
import { all, always, cond, identity, map, none, or, values } from 'ramda'

enum Breakpoints {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

type BreakpointsType = keyof typeof Breakpoints

const breakpoints = values(Breakpoints)

const qry = (bp: BreakpointsType) =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up(bp))

export const onMediaQuery = (
  onSmall: unknown,
  onMedium?: unknown,
  onLarge?: unknown,
): any => {
  const screeInfo = map(qry, breakpoints)
  const isSmall = () => none(identity, screeInfo)
  const isLarge = () => all(identity, screeInfo)
  const isMedium = () => none(identity, [isSmall(), isLarge()])

  const onMd = or(onMedium, onSmall)
  const onLg = or(onLarge, onMd)

  return cond([
    [isSmall, always(onSmall)],
    [isMedium, always(onMd)],
    [isLarge, always(onLg)],
  ])()
}

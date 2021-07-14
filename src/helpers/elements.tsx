import { Typography } from '@material-ui/core'
import React from 'react'

export function toTypography(
  text: string,
  typographyProperties?: Record<string, string>,
): JSX.Element {
  return <Typography {...(typographyProperties || {})}>{text}</Typography>
}

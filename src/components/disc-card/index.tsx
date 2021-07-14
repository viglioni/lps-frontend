import { Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import { map } from 'ramda'
import React from 'react'
import { toTypography } from '../../helpers/elements'
import { convertToString, toDate } from '../../helpers/string'
import { LP } from '../../shared/types/lps'

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 500,
    width: '30%',
    margin: '1%',
  },
  pos: {
    marginBottom: 12,
  },
})

export const DiscCard = (info: LP): JSX.Element => {
  const { root } = useStyles()

  const albumName = toTypography(info.name, { variant: 'h6', align: 'center' })
  const artist = toTypography(info.artist, {
    variant: 'body1',
    align: 'center',
  })
  const [year, boughtat] = map(
    text => toTypography(text, { variant: 'overline', align: 'center' }),
    [convertToString(info.year), toDate(info.boughtat)],
  )

  return (
    <Card className={root} key={info.id}>
      <CardContent>
        <Grid container direction="column">
          <Grid> {albumName}</Grid>
          <Grid>{artist}</Grid>
          <Grid>{year}</Grid>
          <Grid container direction="row">
            <Grid item xs={6}>
              {boughtat}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

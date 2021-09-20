import { Card, CardHeader, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'
import { LP } from '../../shared/types/lps'
import { formatBRL } from '../../shared/currency'

const useStyles = makeStyles({
  root: {
    width: '30%',
    minWidth: 300,
    margin: '1%',
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
})

export const DiscCard = (info: LP): JSX.Element => {
  const { root, media } = useStyles()

  const year = info.released.getFullYear()

  const priceHeader = info.salePrice && (
    <CardHeader subheader={formatBRL(info.salePrice)} />
  )

  return (
    <Card className={root} key={info.id}>
      <CardMedia className={media} image={info.coverUrl} />
      <CardHeader title={info.name} subheader={info.artist + ', ' + year} />
      {priceHeader}
    </Card>
  )
}

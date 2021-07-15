import { Card, CardHeader, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'
import { LP } from '../../shared/types/lps'

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

  return (
    <Card className={root} key={info.id}>
      <CardMedia className={media} image={info.cover_url} />
      <CardHeader
        title={info.name}
        subheader={info.artist + ', ' + info.year}
      />
    </Card>
  )
}

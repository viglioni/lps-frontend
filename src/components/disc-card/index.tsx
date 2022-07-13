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

export type DiscCardProps = { showForSale?: boolean } & LP

export const DiscCard = (props: DiscCardProps): JSX.Element => {
  const { root, media } = useStyles()

  const year = props.released.getFullYear()

  const priceHeader = props.showForSale && props.salePrice && (
    <CardHeader subheader={formatBRL(props.salePrice)} />
  )

  return (
    <Card className={root} key={props.id}>
      <CardMedia className={media} image={props.coverUrl} />
      <CardHeader title={props.name} subheader={props.artist + ', ' + year} />
      {priceHeader}
    </Card>
  )
}

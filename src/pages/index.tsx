import { CircularProgress, Grid, makeStyles } from '@material-ui/core'
import { pipe } from 'fp-ts/lib/function'
import * as TE from 'fp-ts/TaskEither'
import React, { useEffect, useState } from 'react'
import { getAllLPs } from '../api/getLPs'
import { DiscCard } from '../components/disc-card'
import { toTypography } from '../helpers/elements'
import { mapToComponent } from '../helpers/functors'
import { LPs } from '../shared/types/lps'

const useStyles = makeStyles({
  root: {
    padding: '5%',
    minHeight: '100vh',
  },
})

const Home = (): JSX.Element => {
  const [lps, setLps] = useState<LPs>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [hasError, setError] = useState<boolean>(false)

  const { root } = useStyles()

  useEffect(() => {
    setLoading(true)

    const onLeft = (e: Error) => {
      console.error(e)
      setError(true)
    }

    pipe(getAllLPs(), TE.mapLeft(onLeft), TE.map(setLps))().finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <Grid
      className={root}
      container
      alignContent="space-around"
      justifyContent="space-evenly"
    >
      {isLoading && <CircularProgress />}
      {hasError &&
        toTypography('Something went wrong. Please reload the page.')}
      {mapToComponent(lps, DiscCard)}
    </Grid>
  )
}

export default Home

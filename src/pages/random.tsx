import { Button, CircularProgress, Grid, makeStyles } from '@material-ui/core'
import { pipe } from 'fp-ts/lib/function'
import * as TE from 'fp-ts/TaskEither'
import * as R from 'ramda'
import React, { useEffect, useState } from 'react'
import { getRandomLP } from '../api/getLPs'
import { DiscCard } from '../components/disc-card'
import { toTypography } from '../helpers/elements'
import { LP } from '../shared/types/lps'

const useStyles = makeStyles({
  root: {
    padding: '5%',
    minHeight: '100vh',
  },
})

const Random = (): JSX.Element => {
  const [lp, setLp] = useState<LP>()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [hasError, setError] = useState<boolean>(false)
  const foundDisk = lp && R.not(isLoading)

  const { root } = useStyles()

  const loadDisk = async (): Promise<void> => {
    setLoading(true)

    const onLeft = (e: Error) => {
      console.error(e)
      setError(true)
    }

    pipe(getRandomLP(), TE.mapLeft(onLeft), TE.map(setLp))().finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    loadDisk()
  }, [])

  return (
    <Grid
      className={root}
      container
      alignContent="space-around"
      justifyContent="space-evenly"
      direction="column"
    >
      {isLoading && <CircularProgress />}
      {hasError &&
        toTypography('Something went wrong. Please reload the page.')}
      {foundDisk && <DiscCard {...lp} />}
      <Button onClick={loadDisk}>Reload!</Button>
    </Grid>
  )
}

export default Random

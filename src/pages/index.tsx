import { Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getAllLPs } from '../api/getLPs'
import { DiscCard } from '../components/disc-card'
import { mapToComponent } from '../helpers/functors'
import { LPs } from '../shared/types/lps'

const useStyles = makeStyles({
  root: {
    padding: '5%',
  },
})

const Home = (): JSX.Element => {
  const [lps, setLps] = useState<LPs>([])
  const { root } = useStyles()

  useEffect(() => {
    getAllLPs()
      .then(({ data }) => {
        setLps(data.LPs)
      })
      .catch(console.error)
  }, [])

  return (
    <Grid
      className={root}
      container
      alignContent="space-around"
      justifyContent="space-evenly"
    >
      {mapToComponent(lps, DiscCard)}
    </Grid>
  )
}

export default Home

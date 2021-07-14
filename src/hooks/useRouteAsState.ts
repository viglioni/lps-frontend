import { useRouter } from 'next/dist/client/router'
import { compose, lensPath, or, set, view } from 'ramda'
import { useEffect, useState } from 'react'

export const useRouteAsState = (queryName: string, initialState: any) => {
  const queryNameLens = lensPath(['query', queryName])
  const router = useRouter()

  const getUpdatedState = compose(decodeURIComponent, () =>
    or(view(queryNameLens, router), initialState),
  )

  const [state, setState] = useState<any>(getUpdatedState())

  const setActiveState = (newValue: any) =>
    router.push(set(queryNameLens, encodeURIComponent(newValue), router))

  useEffect(() => {
    setState(getUpdatedState())
  }, [router.query])

  return [state, setActiveState]
}

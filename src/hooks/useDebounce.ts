import { useEffect, useState } from 'react'

/*
 * Inspired by https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
 */

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<any>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}

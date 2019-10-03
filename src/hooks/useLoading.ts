import { useState } from 'react'

interface LoadingType {
  isLoading: boolean
  start: () => void
  end: () => void
}

function useLoading(initialState?: boolean): LoadingType {
  const [isLoading, setIsLoading] = useState(initialState || false)

  function start() {
    setIsLoading(true)
  }

  function end() {
    setIsLoading(false)
  }

  return { isLoading, start, end }
}

export default useLoading

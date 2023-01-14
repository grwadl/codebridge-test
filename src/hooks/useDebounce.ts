import { useEffect, useRef } from 'react'

const useDebounce = <T extends (...args: any[]) => void>(fn: T, dependency: unknown[], delay = 500) => {
  const timer = useRef<NodeJS.Timer>()
  useEffect(() => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => fn(), delay)
    return () => clearTimeout(timer.current)
  }, [dependency])
}

export { useDebounce }

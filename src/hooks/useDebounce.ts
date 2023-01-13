import { useEffect } from 'react'

const useDebounce = <T extends (...args: any[]) => void>(fn: T, dependency: unknown[], delay = 500) => {
  let timer: NodeJS.Timer
  useEffect(() => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(), delay)
    return () => clearTimeout(timer)
  }, [dependency])
}

export { useDebounce }

import { useEffect } from 'react'

const useDebounce = <T extends (...args: any[]) => void>(fn: T, dependency: unknown[], delay?: number) => {
  let timer: NodeJS.Timer
  useEffect(() => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(), delay ?? 500)
    return () => clearTimeout(timer)
  }, [dependency])
}

export { useDebounce }

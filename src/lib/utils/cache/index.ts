import type { CacheReturn } from './types/cache-return'
import type { CachedClosure } from './types/cached-closure'

export const cached = <T = unknown>(lifeTime = 300000): CacheReturn<T> => {
  const startOfCaching = Date.now()
  const cached = new Map<string, T>()

  return async (fn: CachedClosure<T>, key: string): Promise<T> => {
    const dateNow = Date.now()

    if (dateNow - startOfCaching > lifeTime) return fn()
    if (cached.has(key)) return cached.get(key) as T

    const result = await fn()
    cached.set(key, result)
    return result
  }
}

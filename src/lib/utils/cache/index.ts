export const cached = <T = unknown>(
  lifeTime = 120000
): ((fn: (...args: any[]) => Promise<T>, key: string) => Promise<T>) => {
  const startOfCaching = Date.now()
  const cached = new Map<string, T>()

  return async (fn: (...args: any[]) => Promise<T>, key: string): Promise<T> => {
    const dateNow = Date.now()
    if (dateNow - startOfCaching > lifeTime) return fn()
    if (cached.has(key)) return cached.get(key) as T

    const result = await fn()
    cached.set(key, result)
    return result
  }
}

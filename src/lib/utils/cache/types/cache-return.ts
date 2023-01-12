import { CachedClosure } from './cached-closure'

export type CacheReturn<T> = (fn: CachedClosure<T>, key: string) => Promise<T>

import { AnyFunc, elementsCallbackMap, intersectionObserver } from '@/lib/utils/intersection'
import { RefObject, useEffect } from 'react'

const useLazyLoading = (refEl: RefObject<HTMLElement>, callback: AnyFunc) => {
  useEffect(() => {
    const element = refEl.current
    if (!element) throw new Error('element cannot be null')

    intersectionObserver.observe(element)
    elementsCallbackMap.set(element, callback)
    return () => {
      intersectionObserver.unobserve(element)
      elementsCallbackMap.delete(element)
    }
  }, [])
}

export { useLazyLoading }

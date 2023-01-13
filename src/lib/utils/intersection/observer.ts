import { AnyFunc } from './types/any-func'

const options: IntersectionObserverInit = { rootMargin: '100px', threshold: 0.25 }
const intersectionObserver: IntersectionObserver = new IntersectionObserver(handleIntersection, options)
const elementsCallbackMap = new WeakMap<Element, AnyFunc>()

function handleIntersection(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    if (!elementsCallbackMap.has(entry.target) || !entry.isIntersecting) return

    const callback = elementsCallbackMap.get(entry.target)
    if (!callback) throw new Error('callback cannot be null')

    intersectionObserver.unobserve(entry.target)
    elementsCallbackMap.delete(entry.target)
    callback()
  })
}

export { intersectionObserver, elementsCallbackMap }

import type {IntersectionDirective} from "./types"

export default <IntersectionDirective> {
  mounted(el, binding) {
    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: 0,
    }

    const callback: IntersectionObserverCallback = (entries, observer) => {
      if (entries[0]?.isIntersecting) {
        binding.value.active()
        observer.unobserve(el)
      }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  }
}

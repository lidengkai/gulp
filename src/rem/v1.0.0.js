// @ts-check
((window, rate, maxWidth) => {
  const { document } = window
  const head = document.getElementsByTagName("html")[0]

  const reset = () => {
    const { innerWidth } = window
    const width = maxWidth ? Math.min(innerWidth, maxWidth) : innerWidth
    const size = width / rate
    head.style.cssText += `font-size: ${size}px !important;`
    if (maxWidth) {
      head.style.cssText += `max-width: ${maxWidth}px !important;margin: 0 auto !important;`
    }
  }

  window.addEventListener('resize', () => {
    reset()
  }, false)

  window.addEventListener('pageshow', e => {
    if (e.persisted) {
      reset()
    }
  }, false)

  reset()
})(window, 10, 0)

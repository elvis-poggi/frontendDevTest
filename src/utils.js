let active = {}
export function scrollMonitor (height, id) {
  const el = document.getElementById(id)
  if (!el) return

  if (!active[ id ] && window.pageYOffset > height) {
    active[ id ] = true
    el.classList.add('over')
  }

  if (active[ id ] && window.pageYOffset < height) {
    active[ id ] = false
    el.classList.remove('over')
  }
}

export function pad2 (num) {
  return (num < 10)
    ? '0' + num
    : num
}

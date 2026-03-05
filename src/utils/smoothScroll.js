export function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 72
    const top = element.offsetTop - navbarHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

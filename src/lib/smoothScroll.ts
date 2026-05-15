import Lenis from 'lenis'

const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

export function scrollTo(target: string) {
  lenis.scrollTo(target)
}

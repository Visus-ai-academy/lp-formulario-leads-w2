import { useEffect } from 'react'
import Lenis from 'lenis'
import HeroSection from '@/components/sections/HeroSection'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <img
        src="assets/logo-w2.svg"
        alt="W2 Club"
        className="fixed top-6 left-8 z-50 h-14 brightness-0 invert"
      />
      <HeroSection />
    </main>
  )
}

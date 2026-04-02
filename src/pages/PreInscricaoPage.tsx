import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import PreInscricaoForm from '@/components/sections/PreInscricaoForm'

interface PreInscricaoPageProps {
  variant: 1 | 2
}

const copy = {
  1: {
    headline: (
      <>
        Faça parte do <span className="text-primary">grupo seleto</span> de médicos que
        faturam mais de R$ 1M por mês
      </>
    ),
    subheadline:
      'Tenha acesso a um ecossistema completo que fará você sair da prateleira de um médico comum para um empresário de sucesso na medicina!',
  },
  2: {
    headline: (
      <>
        O W2 Club é uma <span className="text-primary">comunidade exclusiva</span> focada em
        médicos que buscam escala, networking de alto nível e troca de experiências práticas.
      </>
    ),
    subheadline:
      'Mentorias, encontros presenciais e um ambiente voltado para o crescimento do seu negócio, transformando seus resultados e conhecimentos!',
  },
}

export default function PreInscricaoPage({ variant }: PreInscricaoPageProps) {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  const { headline, subheadline } = copy[variant]

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Logo fixa no desktop */}
      <img
        src="assets/logo-w2.svg"
        alt="W2 Club"
        className="hidden md:block fixed top-6 left-8 z-50 h-14 brightness-0 invert"
      />

      <section className="relative min-h-screen flex items-center justify-center md:justify-end">
        <div
          className="absolute inset-0 bg-cover bg-[17%_top] bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('assets/w2-hero-mobile.webp')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat hidden md:block"
          style={{ backgroundImage: "url('assets/bg-alexandre.webp')" }}
        />
        <div className="absolute inset-0 bg-black/60 md:bg-transparent" />

        <div className="relative z-10 w-full md:w-[37.5vw] max-w-lg md:max-w-none mr-0 md:mr-[9vw] px-6 md:px-8 py-16 md:py-12">
          {/* Logo inline no mobile */}
          <img
            src="assets/logo-w2.svg"
            alt="W2 Club"
            className="md:hidden h-14 brightness-0 invert mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-[2.4vw] font-bold text-foreground leading-tight mb-4"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base md:text-[1.05vw] font-normal text-foreground/70 leading-relaxed mb-8"
          >
            {subheadline}
          </motion.p>

          <PreInscricaoForm />
        </div>
      </section>
    </main>
  )
}

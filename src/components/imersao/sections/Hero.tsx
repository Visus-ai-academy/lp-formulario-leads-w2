import { motion } from 'framer-motion'
import { Pill } from '@/components/imersao/ui/Pill'
import { scrollTo } from '@/lib/smoothScroll'
import { HERO } from '@/config/imersao-content'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function Hero() {
  return (
    <section className="hero-section">
      {/* Mobile: imagem em fluxo, antes do conteúdo */}
      <img
        src="assets/hero-mobile.webp"
        alt=""
        aria-hidden="true"
        className="hero-img-mobile"
      />

      {/* Desktop: imagem em fluxo, define altura da seção */}
      <img
        src="assets/hero-imersao.webp"
        alt=""
        aria-hidden="true"
        className="hero-img-desktop"
      />

      {/* Conteúdo */}
      <div className="hero-overlay">
        <div className="section-inner">
          <motion.div
            className="hero-content-inner flex flex-col gap-5 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Logo */}
            <motion.div variants={fadeUp}>
              <img
                src="assets/logo-imersao-left.svg"
                alt="Imersão Clínica Especializada"
                className="hidden md:block h-[60px] w-auto object-contain object-left"
              />
              <img
                src="assets/logo-imersao-center.svg"
                alt="Imersão Clínica Especializada"
                className="block md:hidden h-[54px] w-auto object-contain mx-auto"
              />
            </motion.div>

            {/* Pill */}
            <motion.div variants={fadeUp}>
              <Pill>{HERO.DATE}</Pill>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[26px] md:text-4xl lg:text-[46px] font-bold leading-tight md:leading-[1.1]"
              style={{ color: '#f5f5f5' }}
            >
              Aprenda como funciona a
              <br className="hidden md:block" />
              {' '}estrutura de uma clínica
              <br className="hidden md:block" />
              {' '}que fatura mais de
              <br className="hidden md:block" />
              {' '}<strong style={{ color: 'var(--color-highlight-on-dark)', fontWeight: 700 }}>R$250k por semana</strong>
              <br className="hidden md:block" />
              {' '}sem depender do dono.
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg lg:text-[20px] font-medium leading-normal"
              style={{ color: 'var(--color-text-on-dark)' }}
            >
              Uma imersão prática que te ensina como fazer a gestão de
              <br className="hidden md:block" />
              {' '}pacientes, equipe e serviços para escalar seu faturamento
              <br className="hidden md:block" />
              {' '}sem te prender no atendimento.
            </motion.p>

            {/* CTA + Disclaimer */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3 w-full md:w-auto md:self-start">
              <button
                onClick={() => scrollTo('#preco')}
                className="cta-btn w-full text-sm md:text-base font-bold tracking-wider"
              >
                <span>
                  GARANTIR MINHA VAGA
                  <br className="md:hidden" />
                  {' '}POR R$497
                </span>
              </button>
              <p
                className="text-xs font-medium tracking-widest uppercase text-center"
                style={{ color: '#fff', opacity: 0.6 }}
              >
                {HERO.DISCLAIMER}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

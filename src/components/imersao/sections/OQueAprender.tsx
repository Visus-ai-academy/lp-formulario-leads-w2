import { motion } from 'framer-motion'
import { scrollTo } from '@/lib/smoothScroll'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const viewport = { once: true, margin: '-80px' }

const BOXES = [
  {
    key: 'flow',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/>
        <rect x="9" y="15" width="6" height="6" rx="1"/>
        <path d="M5 9v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/><path d="M12 13v2"/>
      </svg>
    ),
    text: (<>Como <strong>organizar o fluxo de atendimento</strong> para a recepção <strong>funcionar sem depender de você</strong> em cada decisão.</>),
  },
  {
    key: 'team',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    text: (<>A estrutura de equipe que permite <strong>delegar sem perder controle</strong> sobre a qualidade do atendimento.</>),
  },
  {
    key: 'scale',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    text: (<>Como <strong>definir processos que escalam o faturamento</strong> sem escalar suas horas de trabalho.</>),
  },
  {
    key: 'finance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    text: (<>O <strong>modelo financeiro</strong> que mostra o <strong>lucro real</strong> da clínica — não só o que entra, mas o que fica.</>),
  },
  {
    key: 'growth',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    text: (<>O que <strong>separa uma clínica que cresce</strong> de uma clínica que só aumenta a agenda do dono.</>),
  },
]

const DISCLAIMER_ICON = (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
    <path d="M10 8C6.686 8 4 10.686 4 14c0 2.97 2.042 5.44 4.8 6.118C8.4 22.044 7.23 23.65 5.6 24.8L7.2 27.2C10.72 24.77 13 21.152 13 17.333V14c0-1.062-.277-2.06-.764-2.927L10 8zm14 0c-3.314 0-6 2.686-6 6c0 2.97 2.042 5.44 4.8 6.118C22.4 22.044 21.23 23.65 19.6 24.8l1.6 2.4C24.72 24.77 27 21.152 27 17.333V14c0-1.062-.277-2.06-.764-2.927L24 8z"/>
  </svg>
)

export function OQueAprender() {
  return (
    <section className="oqueaprender-section">
      <div className="oqueaprender-blob oqueaprender-blob-1" />
      <div className="oqueaprender-blob oqueaprender-blob-2" />

      <div className="section-inner oqueaprender-inner">
        <motion.div
          className="oqueaprender-content"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="oqueaprender-headline" style={{ color: '#f5f5f5' }}>
            A escala que{' '}
            <span style={{ color: 'var(--color-highlight-on-dark)' }}>sua clínica precisa</span>
          </motion.h2>

          <motion.div className="oqueaprender-body" variants={stagger}>
            <motion.p variants={fadeUp} style={{ color: 'rgba(218, 232, 255, 0.72)' }}>
              Durante a imersão você vai aprender os pilares que todo médico precisa para desenvolver
              uma visão estratégica e escalar seus resultados sem se tornar refém do próprio negócio.
            </motion.p>
            <motion.p variants={fadeUp} style={{ color: 'rgba(218, 232, 255, 0.72)' }}>
              Essa será uma imersão prática para que você deixe de ser um "médico na gestão"
              e aprenda o que precisa para ser um{' '}
              <strong style={{ color: 'var(--color-text-on-dark)', fontWeight: 700 }}>Médico Empresário.</strong>
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} className="pilares-divider" />

          {/* Grid 3x2 */}
          <motion.div variants={fadeUp} style={{ width: '100%' }}>
            <div className="boxes-grid">
              {BOXES.map((box) => (
                <div key={box.key} className="box-ef">
                  <div className="box-ef-icon">{box.icon}</div>
                  <p className="box-text">{box.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="pilares-divider" />

          {/* Citação */}
          <motion.div variants={fadeUp} className="oqueaprender-quote">
            <div className="quote-icon">{DISCLAIMER_ICON}</div>
            <p className="quote-text">
              "Médico bom qualquer faculdade forma. O que ninguém te ensina é como transformar isso
              em um negócio que funciona sem você."{' '}
              — <strong>Dr. Alexandre Kaue</strong>
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="oqueaprender-cta">
            <button
              onClick={() => scrollTo('#preco')}
              className="cta-btn text-sm md:text-base font-bold tracking-wider"
            >
              <span>
                GARANTIR MINHA VAGA
                <br className="md:hidden" />
                {' '}POR R$497
              </span>
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

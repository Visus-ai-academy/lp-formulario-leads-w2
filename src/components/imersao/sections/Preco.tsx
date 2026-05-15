import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function ProgressBar({ percent }: { percent: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="w-full">
      <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'rgba(218, 232, 255, 0.08)' }}>
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #b8902a, #e3c68e, #b8902a, #e3c68e, #b8902a)',
            backgroundSize: '300% 100%',
          }}
          initial={{ width: 0 }}
          animate={isInView
            ? { width: `${percent}%`, backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }
            : { width: 0 }
          }
          transition={{
            width: { duration: 1.2, ease: 'easeOut', delay: 0.2 },
            backgroundPosition: { duration: 3, ease: 'linear', repeat: Infinity, delay: 1.4 },
          }}
        >
          <motion.span
            className="absolute inset-y-0 w-8 -skew-x-12"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)' }}
            initial={{ left: '-2rem' }}
            animate={{ left: '110%' }}
            transition={{ duration: 0.6, ease: 'easeIn', delay: 1.6, repeat: Infinity, repeatDelay: 4 }}
          />
        </motion.div>
      </div>
      <p className="text-xs mt-1.5 text-right" style={{ color: 'rgba(218, 232, 255, 0.5)' }}>
        {percent}% dos Ingressos Vendidos
      </p>
    </div>
  )
}

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="10" cy="10" r="10" fill="rgba(34, 197, 94, 0.15)" />
    <path d="M6 10.5l2.5 2.5 5.5-6" stroke="rgb(74, 222, 128)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ENTREGAVEIS = [
  <>Acesso à Imersão Clínica<br className="preco-br-mobile" /> Escalada ao vivo;</>,
  <>Acesso ao grupo exclusivo de<br className="preco-br-mobile" /> participantes no WhatsApp;</>,
  <>Material de apoio da imersão.</>,
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const viewport = { once: true, margin: '-80px' }

export function Preco() {
  return (
    <section id="preco" className="preco-section">
      <div className="oqueaprender-blob oqueaprender-blob-1" style={{ top: '-80px', left: '-80px' }} />
      <div className="oqueaprender-blob oqueaprender-blob-2" style={{ bottom: '-60px', right: '-60px' }} />

      <div className="section-inner preco-inner">
        <motion.div
          className="preco-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {/* Esquerda: headline + entregáveis */}
          <motion.div className="preco-left" variants={stagger}>
            <motion.img
              variants={fadeUp}
              src="assets/logo-imersao-left.svg"
              alt="Imersão Clínica Escalada"
              className="preco-logo-left preco-logo-left--desktop"
            />
            <motion.h2 variants={fadeUp} className="preco-headline" style={{ color: '#f5f5f5' }}>
              Garanta sua vaga
              <br className="block md:hidden" />
              {' '}antes que o{' '}
              <br className="hidden md:block" />
              <span style={{ color: '#e3c68e' }}>lote
                <br className="block md:hidden" />
                {' '}promocional se esgote
              </span>
            </motion.h2>

            <motion.div variants={fadeUp} className="preco-left-divider" />

            <motion.ul variants={stagger} className="preco-entregaveis">
              {ENTREGAVEIS.map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="preco-entregavel">
                  <CheckIcon />
                  <span style={{ color: 'rgba(218, 232, 255, 0.8)' }}>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Direita: box de preço */}
          <motion.div variants={fadeUp} className="preco-box">
            <img
              src="assets/logo-imersao-center.svg"
              alt="Imersão Clínica Escalada"
              className="preco-logo preco-logo--mobile"
            />

            <div className="preco-pricing">
              <span className="preco-de">De R$ 997,00</span>
              <span className="preco-parcelamento">POR APENAS 12X DE</span>
              <div className="preco-value">
                <span className="preco-currency preco-gold">R$</span>
                <span className="preco-amount preco-gold">51</span>
                <span className="preco-cents preco-gold">,40</span>
              </div>
              <span className="preco-avista">OU À VISTA POR R$ 497,00</span>
            </div>

            <div className="preco-lotes">
              <div className="preco-lote preco-lote-ativo">
                <span className="preco-lote-nome preco-gold">Lote 1</span>
                <span className="preco-lote-preco">R$ 497,00</span>
              </div>
              <div className="preco-lote preco-lote-disabled">
                <span className="preco-lote-nome" style={{ color: 'rgba(218, 232, 255, 0.35)' }}>Lote 2</span>
                <span className="preco-lote-preco" style={{ color: 'rgba(218, 232, 255, 0.35)' }}>R$ 697,00</span>
                <span className="preco-lote-soon">Em breve</span>
              </div>
            </div>

            <ProgressBar percent={56} />

            <a
              id="bt_checkout"
              href="https://pay.kiwify.com.br/tKfzOmZ"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-green w-full font-bold tracking-wider text-sm md:text-base"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
            >
              <span>
                GARANTIR MINHA
                <br className="preco-br-mobile" />
                {' '}VAGA AGORA
              </span>
            </a>

            <img
              src="assets/logos-credito.webp"
              alt="Formas de pagamento"
              className="preco-pagamentos"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { scrollTo } from '@/lib/smoothScroll'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const viewport = { once: true, margin: '-80px' }

export function Autoridade() {
  return (
    <section className="autoridade-section">
      <div className="section-inner">
        <motion.div
          className="autoridade-box"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {/* Mobile: imagem antes do conteúdo */}
          <img
            src="assets/img-alexandre.webp"
            alt="Dr. Alexandre Kaue"
            className="autoridade-img-mobile"
          />

          <div className="autoridade-grid">
            {/* Esquerda: imagem desktop */}
            <motion.div className="autoridade-image" variants={fadeUp}>
              <img src="assets/img-alexandre.webp" alt="Dr. Alexandre Kaue" className="w-full h-auto" />
            </motion.div>

            {/* Direita: conteúdo */}
            <motion.div className="autoridade-content" variants={stagger}>
              <motion.h2 variants={fadeUp} className="autoridade-headline" style={{ color: '#f5f5f5' }}>
                Quem vai conduzir a
                <br className="hidden md:block" />
                {' '}<strong style={{ fontWeight: 700, color: '#e3c68e' }}>Imersão Clínica Escalada?</strong>
              </motion.h2>

              <motion.div className="autoridade-body" variants={stagger}>
                <motion.p variants={fadeUp} style={{ color: 'rgba(218, 232, 255, 0.75)', textWrap: 'pretty' }}>
                  <strong style={{ color: 'var(--color-text-on-dark)' }}>Dr. Alexandre Kaue</strong> não é palestrante de palco.
                </motion.p>

                <motion.p variants={fadeUp} style={{ color: 'rgba(218, 232, 255, 0.75)', textWrap: 'pretty' }}>
                  É um médico empresário, dono de um ecossistema de operações médicas com mais de{' '}
                  <strong style={{ color: 'var(--color-text-on-dark)' }}>R$ 50 milhões em faturamento no último ano.</strong>
                </motion.p>

                <motion.p variants={fadeUp} style={{ color: 'rgba(218, 232, 255, 0.75)', textWrap: 'pretty' }}>
                  Somente na clínica que concentra seus atendimentos, faturou mais de{' '}
                  <strong style={{ color: 'var(--color-text-on-dark)' }}>R$ 2 milhões no último mês</strong> — não porque trabalha mais horas,
                  mas porque <strong style={{ color: 'var(--color-text-on-dark)' }}>construiu a estrutura certa.</strong>
                </motion.p>

                <motion.p variants={fadeUp} style={{ color: 'rgba(218, 232, 255, 0.75)', textWrap: 'pretty' }}>
                  <strong style={{ color: 'var(--color-text-on-dark)' }}>Alexandre foi o médico que chegou ao limite.</strong> A clínica crescia, a agenda crescia
                  junto e, em algum momento, ele percebeu que tinha construído um cargo, não um negócio.
                </motion.p>

                <motion.p variants={fadeUp} style={{ color: 'rgba(218, 232, 255, 0.75)', textWrap: 'pretty' }}>
                  Hoje, dentro de suas clínicas e operações de telemedicina, possui mais de{' '}
                  <strong style={{ color: 'var(--color-text-on-dark)' }}>200 médicos sob sua gestão.</strong> Todas as suas empresas funcionam com gestão,
                  estratégia e estrutura; por isso, ele{' '}
                  <strong style={{ color: 'var(--color-text-on-dark)' }}>consegue viajar para congressos internacionais enquanto os negócios operam com excelência.</strong>
                </motion.p>

                <motion.p variants={fadeUp} style={{ color: 'rgba(218, 232, 255, 0.75)', textWrap: 'pretty' }}>
                  E na <strong style={{ color: 'var(--color-text-on-dark)' }}>Imersão Clínica Escalada,</strong> você vai aprender como esse modelo opera na prática.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <button
                  onClick={() => scrollTo('#preco')}
                  className="cta-btn text-sm md:text-base font-bold tracking-wider"
                >
                  <span>
                    QUERO APRENDER ESSE
                    <br className="md:hidden" />
                    {' '}MODELO DE GESTÃO
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

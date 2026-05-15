import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const viewport = { once: true, margin: '-80px' }

export function Promessa() {
  return (
    <section className="promessa-section">
      {/* Mobile: imagem antes do conteúdo */}
      <img
        src="assets/img-clinic-mobile.webp"
        alt=""
        aria-hidden="true"
        className="promessa-img-mobile"
      />

      <div className="section-inner">
        <div className="promessa-grid">

          {/* Esquerda: conteúdo */}
          <motion.div
            className="promessa-content"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="promessa-headline"
              style={{ color: 'var(--color-text-on-light)' }}
            >
              É por isso que{' '}
              <strong style={{ color: '#4377cc', fontWeight: 700 }}>muitas clínicas travam</strong>
              {' '}no resultado.
            </motion.h2>

            <motion.div className="promessa-subline" variants={stagger}>
              <motion.p variants={fadeUp} style={{ color: 'var(--color-text-on-light)' }}>
                Uma clínica de sucesso, de alto padrão e alto faturamento
                <br className="hidden md:block" />
                {' '}não depende do dono para funcionar.
              </motion.p>

              <motion.p variants={fadeUp} style={{ color: 'var(--color-text-on-light)' }}>
                Quando você entende como organizar o fluxo de pacientes,
                <br className="hidden md:block" />
                {' '}a estrutura de equipe e processos, você deixa de ser
                <br className="hidden md:block" />
                {' '}APENAS um "médico gestor" e destrava os caminhos para
                <br className="hidden md:block" />
                {' '}multiplicar seu faturamento.
              </motion.p>

              <motion.p variants={fadeUp} style={{ color: 'var(--color-text-on-light)' }}>
                Na{' '}
                <strong style={{ color: 'var(--color-highlight-on-light)', fontWeight: 700 }}>
                  Imersão Clínica Escalada
                </strong>
                {' '}você aprende o modelo
                <br className="hidden md:block" />
                {' '}que já funciona na clínica do{' '}
                <strong style={{ color: 'var(--color-highlight-on-light)', fontWeight: 700 }}>
                  Dr. Alexandre Kaue
                </strong>
                <br className="hidden md:block" />
                {' '}e que pode ser replicado na sua clínica.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Direita: imagem desktop */}
          <motion.div
            className="promessa-image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src="assets/img-clinic.webp"
              alt="Clínica"
              className="w-full h-auto"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'Preciso ser médico para participar?',
    a: 'Sim. A Imersão Clínica Escalada foi desenvolvida para médicos donos de clínica ou consultório que já faturam bem e querem estruturar o negócio para crescer sem depender da sua presença em cada decisão.',
  },
  {
    q: 'Onde será transmitido o Evento?',
    a: (
      <>
        A <strong>Imersão Clínica Escalada</strong> será AO VIVO e transmitida via ZOOM no dia 06 de junho de 2026, das 10h às 13h.
        O link privado para participar da Imersão será enviado no{' '}
        <strong>GRUPO DE INSCRITOS NO WHATSAPP.</strong>
      </>
    ),
  },
  {
    q: 'O que exatamente vou aprender?',
    a: 'Gestão de pacientes, estrutura de equipe, definição de processos e modelo financeiro, tudo baseado no que funciona hoje na clínica do Dr. Alexandre.',
  },
  {
    q: 'Para qual tipo de médico é indicado?',
    a: 'Para médicos donos de clínicas que já faturam acima de R$100k/mês e ainda dependem da sua presença para o negócio funcionar. Se a clínica para quando você para, essa imersão é para você.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'O ingresso é adquirido via plataforma Kiwify. Lote 1: R$497. Lote 2: R$697.',
  },
]

const PlusIcon = ({ open }: { open: boolean }) => (
  <div className={`faq-icon ${open ? 'faq-icon--open' : ''}`}>
    <span className="faq-icon-bar faq-icon-bar--h" />
    <span className="faq-icon-bar faq-icon-bar--v" />
  </div>
)

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq-section">
      <div className="section-inner faq-inner">
        <div className="faq-card">
          <h2 className="faq-headline">Perguntas Frequentes</h2>

          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{faq.q}</span>
                  <PlusIcon open={openIndex === i} />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="faq-answer">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

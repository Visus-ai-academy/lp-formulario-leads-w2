import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-end bg-cover bg-[center_top] bg-no-repeat"
      style={{ backgroundImage: "url('assets/bg-alexandre.webp')" }}
    >
      <div className="w-[37.5vw] mr-[9vw] px-8 py-16 md:py-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-[2.4vw] font-bold text-foreground leading-tight mb-4"
        >
          O ambiente que todo<br />médico procura para<br />
          <span className="text-primary">acelerar seus resultados!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base md:text-[1.05vw] font-normal text-foreground/70 leading-relaxed mb-8"
        >
          Preencha o formulário abaixo e faça sua aplicação para o{' '}
          <span className="font-semibold text-foreground">W2 Club.</span>
        </motion.p>

        <WaitlistForm />
      </div>
    </section>
  )
}

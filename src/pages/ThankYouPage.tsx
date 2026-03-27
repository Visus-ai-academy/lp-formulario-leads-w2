import { motion } from 'framer-motion'

export default function ThankYouPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat px-6 text-center"
      style={{ backgroundImage: "url('assets/bg-obrigado.webp')" }}
    >
      <style>{`
        .cta-obrigado {
          background-color: #92855C;
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, letter-spacing 0.3s ease;
        }
        .cta-obrigado:hover {
          background-color: #a89870;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 30px rgba(146, 133, 92, 0.5);
          letter-spacing: 0.2em;
        }
        .cta-obrigado:active {
          transform: translateY(0) scale(0.99);
          box-shadow: 0 4px 12px rgba(146, 133, 92, 0.3);
        }
      `}</style>

      <img
        src="assets/logo-w2.svg"
        alt="W2 Club"
        className="h-14 brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] uppercase">
        Formulário recebido com sucesso!
      </h1>
      <h2 className="text-base md:text-lg font-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] max-w-3xl leading-relaxed">
        Iremos avaliar suas respostas, e um dos nossos consultores irá entrar em contato com você assim que possível! Agradecemos desde já sua aplicação.
      </h2>
      <a
        href="https://www.instagram.com/w2_club/"
        target="_blank"
        rel="noreferrer"
        className="cta-obrigado mt-2 rounded-lg px-8 py-4 text-sm font-bold tracking-widest text-white"
      >
        SIGA-NOS NO INSTAGRAM
      </a>
    </motion.div>
  )
}

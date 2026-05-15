import '../imersao.css'
import { Hero } from '@/components/imersao/sections/Hero'
import { Ticker } from '@/components/imersao/sections/Ticker'
import { Promessa } from '@/components/imersao/sections/Promessa'
import { OQueAprender } from '@/components/imersao/sections/OQueAprender'
import { Autoridade } from '@/components/imersao/sections/Autoridade'
import { Countdown } from '@/components/imersao/sections/Countdown'
import { Preco } from '@/components/imersao/sections/Preco'
import { FAQ } from '@/components/imersao/sections/FAQ'
import { Footer } from '@/components/imersao/sections/Footer'
import { WhatsAppFloating } from '@/components/imersao/ui/WhatsAppFloating'

export default function ImersaoClinicaPage() {
  return (
    <main style={{ fontFamily: "'Archivo', sans-serif", backgroundColor: '#04070e', color: '#dae8ff' }}>
      <Hero />
      <Ticker />
      <Promessa />
      <OQueAprender />
      <Autoridade />
      <Countdown />
      <Preco />
      <FAQ />
      <Footer />
      <WhatsAppFloating />
    </main>
  )
}

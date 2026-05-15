import { useEffect } from 'react'
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

const CHECKOUT_URL = 'https://pay.kiwify.com.br/tKfzOmZ'
const BUTTON_ID = 'bt_checkout'
const ALLOWED_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'src', 'sck', 's1', 's2', 's3']

function buildCheckoutUrl() {
  const urlParams = new URLSearchParams(window.location.search)
  const checkoutUrl = new URL(CHECKOUT_URL)

  ALLOWED_PARAMS.forEach((param) => {
    const value = urlParams.get(param)
    if (value) {
      checkoutUrl.searchParams.set(param, value)
      localStorage.setItem(param, value)
    } else {
      const saved = localStorage.getItem(param)
      if (saved) checkoutUrl.searchParams.set(param, saved)
    }
  })

  return checkoutUrl.toString()
}

export default function ImersaoClinicaPage() {
  useEffect(() => {
    const button = document.getElementById(BUTTON_ID) as HTMLAnchorElement | null
    if (!button) return
    const finalUrl = buildCheckoutUrl()
    button.href = finalUrl
  }, [])

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

export function Obrigado() {
  return (
    <main className="obrigado-main">
      <div className="obrigado-box">
        <img
          src="assets/logo-imersao-center.svg"
          alt="Imersão Clínica Escalada"
          className="obrigado-logo"
        />

        <h1 style={{ color: '#f5f5f5', fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 700, maxWidth: 560, lineHeight: 1.25, margin: 0 }}>
          Sua inscrição na <span style={{ color: '#e3c68e' }}>Imersão Clínica Escalada</span> foi concluída com sucesso
        </h1>

        <p style={{ color: 'rgba(218, 232, 255, 0.72)', fontSize: '1rem', maxWidth: 640, lineHeight: 1.6, margin: 0 }}>
          O encontro acontecerá dia <strong style={{ color: '#f5f5f5' }}>06 de Junho às 10h00 no Zoom,</strong> e para
          <br />
          receber o link de acesso, você deve estar no Grupo Vip do WhatsApp
        </p>

        <p style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
          Clique no botão abaixo e<br className="md:hidden" /> entre no grupo
        </p>

        <a
          href="https://chat.whatsapp.com/HvpQsaWOcWF5Mw3M7SVuKG"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn-green font-bold tracking-wide md:tracking-wider text-sm md:text-base obrigado-cta"
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
        >
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.663 4.785 1.82 6.77L2 30l7.43-1.79A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.88-1.61l-.42-.25-4.41 1.06 1.1-4.29-.28-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.34-8.64c-.35-.17-2.06-1.01-2.38-1.13-.32-.11-.55-.17-.78.17-.23.35-.88 1.13-1.08 1.36-.2.23-.4.26-.74.09-.35-.17-1.47-.54-2.8-1.73-1.03-.92-1.73-2.06-1.93-2.41-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.17-.2.23-.35.35-.58.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59h-.66c-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.85s1.23 3.31 1.4 3.54c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.06-.84 2.35-1.66.29-.82.29-1.52.2-1.66-.08-.15-.31-.23-.66-.4z"/>
          </svg>
          ACESSAR GRUPO VIP
        </a>
      </div>
    </main>
  )
}

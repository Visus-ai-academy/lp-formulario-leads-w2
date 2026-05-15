export function Footer() {
  return (
    <footer className="footer-section">
      <div className="section-inner footer-inner">
        <img
          src="assets/logo-imersao-center.svg"
          alt="Imersão Clínica Escalada"
          className="footer-logo"
        />

        <p className="footer-title">
          © 2026 W2 Club | Dr. Alexandre Kaue Sakuma
        </p>

        <p className="footer-legal">
          Todos os dados coletados são usados exclusivamente para envio do acesso à imersão
          e comunicações relacionadas ao evento.
        </p>

        <p className="footer-dev">
          Desenvolvido por:{' '}
          <a
            href="https://escala.novadimensaohub.com.br/aceleracao-de-experts"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#e3c68e', fontWeight: 700, textDecoration: 'none' }}
          >
            Nova Dimensão
          </a>
        </p>
      </div>
    </footer>
  )
}

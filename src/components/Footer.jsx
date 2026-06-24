import './Footer.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="footer__glow" aria-hidden="true"></div>
      <div className="section-container">
        <div className="footer__content">
          <a href="#" className="footer__logo" onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            <span className="footer__logo-bracket">&lt;</span>
            SR
            <span className="footer__logo-bracket"> /&gt;</span>
          </a>

          <p className="footer__tagline">
            Designed & built with care.
          </p>

          <div className="footer__divider"></div>

          <p className="footer__copy">
            &copy; {currentYear} Santosh Raut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

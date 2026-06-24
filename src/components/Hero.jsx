import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Decorative elements */}
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="hero__particles" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="hero__container section-container">
        <div className="hero__content">
          <div className="hero__greeting">
            <span className="hero__wave">👋</span>
            <span className="hero__greeting-text">Hello, I'm</span>
          </div>

          <h1 className="hero__name">
            Santosh <span className="gold-text">Raut</span>
          </h1>

          <p className="hero__title">
            <span className="hero__title-line"></span>
            Student
          </p>

          <p className="hero__description">
            I love tech and learning new things.
            My favourite part of tech is software.
          </p>

          <div className="hero__actions">
            <a href="#work" className="hero__btn hero__btn--primary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View My Work
              <span className="hero__btn-arrow">→</span>
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-dot"></span>
              <span className="hero__card-dot"></span>
              <span className="hero__card-dot"></span>
            </div>
            <div className="hero__card-body">
              <code className="hero__code">
                <span className="hero__code-keyword">const</span>{' '}
                <span className="hero__code-var">developer</span>{' '}
                <span className="hero__code-op">=</span> {'{'}
                <br />
                {'  '}<span className="hero__code-key">name</span>:{' '}
                <span className="hero__code-string">"Santosh Raut"</span>,
                <br />
                {'  '}<span className="hero__code-key">role</span>:{' '}
                <span className="hero__code-string">"Student"</span>,
                <br />
                {'  '}<span className="hero__code-key">passion</span>:{' '}
                <span className="hero__code-string">"Learning new things about tech"</span>,
                <br />
                {'  '}<span className="hero__code-key">coffee</span>:{' '}
                <span className="hero__code-bool">true</span>,
                <br />
                {'}'};
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot"></div>
        </div>
      </div>
    </section>
  )
}

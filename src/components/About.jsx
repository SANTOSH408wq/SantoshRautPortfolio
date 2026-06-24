import './About.css'

export function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Antigravity'] },
    { category: 'Database', items: ['Supabase'] },
  ]

  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about__header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Who <span className="gold-text">I Am</span>
          </h2>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p className="about__paragraph">
              I'm a passionate student who loves learning aboyt tech from the web.
              My journey in software development began with curiosity and has
              evolved into a deep commitment to learning and crafting high-quality, user-centric
              digital experiences.
            </p>
            <p className="about__paragraph">
              When I'm not coding, you'll find me exploring new technologies,
              learning about different Operating systems, or sharing knowledge with
              my fellow students. I believe in continuous learning and
              pushing the boundaries of what's possible.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">1+</span>
                <span className="about__stat-label">Years Experience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">3+</span>
                <span className="about__stat-label">Projects Completed</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">1+</span>
                <span className="about__stat-label">Internships Done</span>
              </div>
            </div>
          </div>

          <div className="about__skills">
            <h3 className="about__skills-title">My Skills</h3>
            <div className="about__skills-grid">
              {skills.map((group, index) => (
                <div className="about__skill-group" key={index}>
                  <h4 className="about__skill-category">{group.category}</h4>
                  <ul className="about__skill-list">
                    {group.items.map((item, i) => (
                      <li className="about__skill-item" key={i}>
                        <span className="about__skill-bullet">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
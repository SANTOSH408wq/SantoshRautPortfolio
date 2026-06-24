import './Experience.css'

export function Experience() {
  const experiences = [
    {
      period: '2026 — Present',
      role: 'Diploma Student undergoing Industrial training',
      company: 'Elite Forums',
      description: 'Currently learning about Full Stack development',
      tags: ['JavaScript', 'Vercel', 'Github.io', 'React'],
    },
    {
      period: '2024 — 2026',
      role: 'Diploma Student learning about Programming Languages, Data Structures & Algorithms',
      company: 'Bhausaheb Vartak Polytechnic',
      description: 'Learning about Java, C++ and Assembly Languages, HTML and CSS.',
      tags: ['Assembly Language', 'Java', 'C++', 'HTML', 'CSS', 'C'],
    },
    {
      period: '2023 — (mid) 2025',
      role: 'Studied and worked as an intern',
      company: 'GroyneTech',
      description: 'Learnt about various CAD softwares, CNC and VMC machinery.',
      tags: ['SolidWorks', 'MasterCAM', 'AutoCAD', 'CNC', 'VMC'],
    },
  ]

  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <div className="experience__header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Where I've <span className="gold-text">Worked</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my professional journey and the roles that shaped my expertise.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div className="experience__item" key={index}>
              <div className="experience__indicator">
                <div className="experience__dot"></div>
                {index < experiences.length - 1 && <div className="experience__line"></div>}
              </div>

              <div className="experience__card">
                <span className="experience__period">{exp.period}</span>
                <h3 className="experience__role">{exp.role}</h3>
                <span className="experience__company">@ {exp.company}</span>
                <p className="experience__description">{exp.description}</p>
                <div className="experience__tags">
                  {exp.tags.map((tag, i) => (
                    <span className="experience__tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
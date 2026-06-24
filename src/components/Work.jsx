import './Work.css'

export function Work() {
  const projects = [
    {
      title: 'A File Editor Made in C',
      description: 'My first project made in C language with basic features like opening, editing, and saving files, etc',
      tags: ['C'],
      liveLink: 'https://onlinegdb.com/v8HxSWb-_S',
      codeLink: 'https://github.com/SANTOSH408wq/FileEditor',
    },
    {
      title: 'A File manager made in C++',
      description: 'My file manager project made in C++. It has various features like opening, editing, and saving files, etc',
      tags: ['C++'],
      liveLink: 'https://onlinegdb.com/O8M34YO4G',
      codeLink: 'https://github.com/SANTOSH408wq/File-Manager',
    },
    {
      title: 'E-Commerce Website Axis Tech',
      description: 'An E-commerce tech website UI with add product, Update product and remove product functionalities.',
      tags: ['JavaScript', 'CSS', 'React'],
      liveLink: 'https://e-commerce-website-black-one.vercel.app',
      codeLink: 'https://github.com/SANTOSH408wq/E_commerce_website',
    },
    {
      title: 'OmniSync',
      description: 'A website where students can create request beacons (for a problem) which can be accepted by other students to solve problems and later on help them in earning money. (This is also just a prototype)',
      tags: ['React', 'JavaScript', 'CSS'],
      liveLink: 'https://santosh408wq.github.io/omnisync/',
      codeLink: 'https://github.com/SANTOSH408wq/omnisync',
    },
  ]

  return (
    <section className="work" id="work">
      <div className="section-container">
        <div className="work__header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gold-text">Work</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects I've built — each one a unique challenge and learning experience.
          </p>
        </div>

        <div className="work__grid">
          {projects.map((project, index) => (
            <div className="work__card" key={index}>
              <div className="work__card-image">
                <div className="work__card-placeholder">
                  <span className="work__card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="work__card-overlay">
                  <a href={project.liveLink} className="work__card-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live
                  </a>
                  <a href={project.codeLink} className="work__card-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>

              <div className="work__card-content">
                <h3 className="work__card-title">{project.title}</h3>
                <p className="work__card-description">{project.description}</p>
                <div className="work__card-tags">
                  {project.tags.map((tag, i) => (
                    <span className="work__card-tag" key={i}>{tag}</span>
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
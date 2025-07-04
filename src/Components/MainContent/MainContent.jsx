import './MainContent.css'
import { motion } from 'framer-motion'
import Header from '../Header/Header'
import ProjectsCarousel from '../ProjectsCarousel/ProjectsCarousel'
import { PROJECTS } from '../../data/PROJECTS.js'
import { useContext } from 'react'
import { PageContext } from '../../context/page.jsx'
import { useNavigate } from 'react-router-dom'

export default function MainContent () {
  const { section, setSection } = useContext(PageContext)
  const projectsShown = PROJECTS.sort(() => Math.random() - 0.5).slice(0, 6)
  const navigate = useNavigate()

  const handleClick = (slug) => {
    navigate(`/proyectos/${slug}`)
  }

  return (
    <section id='main-content'>
      <Header />
      <motion.main
        initial={{
          opacity: 0,
          x: -50
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
            ease: 'easeOut'
          }
        }}
        viewport={{
          once: true,
          amount: 0.4
        }}
      >
        {section === 'projects' && <ProjectsCarousel slides={PROJECTS} options={{ loop: true }} />}
        {section === 'personal' && (
          <>
            <div className='personal-info-container'>
              <p>
                En Empty Design nos apasiona crear diseños que destaquen tu marca ¡y esto es gracias a
                la creatividad y visión única de cada cliente! Mantente informado sobre nuestras
                últimas creaciones y lo que viene en el mundo del diseño. Si estás interesado en
                obtener el toque de un diseñador profesional, contáctanos para conocer más sobre
                nuestro portafolio y servicios.
                Si necesitas más ayuda puedes escribir tus preguntas
                en nuestras redes sociales y obtener respuestas instantáneas.
                <hr />
                Para mantenerte
                actualizado con todo en Empty Design, incluyendo consejos y cosas que creemos que son
                geniales, ¡síguenos en nuestras plataformas digitales!
              </p>
            </div>
            <div className='projects-container'>
              <div className='projects-grid'>
                {projectsShown.map((p, index) =>
                  <div className='project' key={index} onClick={() => handleClick(p.slug)}>
                    <img src={p.img} alt={p.title} />
                  </div>
                )}
              </div>
              <button className='personal-section-btn' onClick={() => { setSection('projects') }}>Ver todos los proyectos</button>
            </div>
          </>
        )}
      </motion.main>
    </section>
  )
}

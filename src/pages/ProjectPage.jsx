import { useNavigate, useParams } from 'react-router-dom'
import { PROJECTS } from '../data/PROJECTS'
import { motion } from 'framer-motion'
import Header from '../Components/Header/Header'
import './ProjectPage.css'
import { useEffect, useState } from 'react'

export default function ProjectPage () {
  const navigate = useNavigate()
  const { slug } = useParams()
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug)
  const project = PROJECTS[currentIndex]
  const nextIndex = (currentIndex + 1) % PROJECTS.length
  const nextProject = PROJECTS[nextIndex]

  const [play, setPlay] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClickBack = () => {
    navigate('/home')
  }

  const handleClickNextProject = (slug) => {
    navigate(`/proyectos/${slug}`)
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        id='pp-main-content'
      >
        <Header />
        <div className='pp-img-container'>
          <motion.img
            initial={{
              width: '350px'
            }}
            animate={{
              width: '100%',
              transition: {
                duration: 2
              }
            }}
            className='pp-background-img'
            src={project.img}
            alt={project.title}
          />
        </div>
        <main className='pp-main'>
          <motion.h1
            initial={{
              opacity: 0,
              y: -150
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
                ease: 'easeOut'
              }
            }}
            className='pp-h1'
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{
              once: true,
              amount: 0.9
            }}
            className='pp-info'
          >
            <p>{project.description}</p>
          </motion.div>
          <div className='pp-layout'>
            {slug === 'project-1' && (
              <div className='projects-container'>
                {project.projectPage.img.map((img) => {
                  return (
                    <img
                      key={img}
                      src={img}
                      alt='Portadas Editoriales'
                      style={{ width: '900px', borderRadius: '1rem' }}
                    />
                  )
                })}
              </div>
            )}
            {slug === 'project-3' && (
              <img
                src={project.projectPage.img}
                alt={`${project.title} extra images`}
                style={{ borderRadius: '1rem' }}
              />
            )}
            {slug === 'project-8' && (
              <motion.iframe
                whileInView={() => setPlay(1)}
                viewport={{
                  once: true,
                  amount: 0.9
                }}
                width='860'
                height='615'
                src={`https://www.youtube.com/embed/IbiH2cuBnqU?si=tvvAbLvkSLTSuOrg&autoplay=${play}&mute=1`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                style={{ borderRadius: '1rem' }}
              />
            )}
          </div>
        </main>
        <footer>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.8 }}
            className='project-nav hover-effect'
            onClick={handleClickBack}
          >
            <span className='hover-text left'>← Volver a Proyectos</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            viewport={{
              once: true,
              amount: 0.8
            }}
          >
            Contact Me
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.8 }}
            className='project-nav hover-effect'
            onClick={() => handleClickNextProject(nextProject.slug)}
          >
            <span className='hover-text right'>Ver próximo Proyecto →</span>
          </motion.div>
        </footer>
      </motion.section>
    </>
  )
}

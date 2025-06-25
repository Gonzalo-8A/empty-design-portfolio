import { useParams } from 'react-router-dom'
import { PROJECTS } from '../data/PROJECTS'
import { motion } from 'framer-motion'
import Header from '../Components/Header/Header'
import './ProjectPage.css'
import { useEffect, useState } from 'react'

export default function ProjectPage () {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  const [play, setPlay] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
          <div className='pp-info'>
            <p>{project.description}</p>
          </div>
          <div className='pp-layout'>
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
      </motion.section>
    </>
  )
}

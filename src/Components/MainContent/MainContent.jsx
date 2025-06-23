import './MainContent.css'
import { motion } from 'framer-motion'
import Header from '../Header/Header'
import ProjectsCarousel from '../ProjectsCarousel/ProjectsCarousel'
import { PROJECTS } from '../../data/PROJECTS.js'

export default function MainContent () {
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
        <ProjectsCarousel slides={PROJECTS} options={{ loop: true }} />
      </motion.main>
    </section>
  )
}

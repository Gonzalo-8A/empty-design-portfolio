import './ProjectsInfo.css'
import { PROJECTS } from '../../data/PROJECTS'
import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectsInfo ({ index }) {
  return (

    <AnimatePresence mode='wait'>
      <motion.div
        className='info-container'
        key={PROJECTS[index].title}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.6 }}
      >
        <div className='project-header'>
          <h2 className='project-title'>{PROJECTS[index].title}</h2>
          <p className='project-date'>{PROJECTS[index].date}</p>
        </div>
        <p className='project-description'>{PROJECTS[index].description}</p>
      </motion.div>
    </AnimatePresence>
  )
}

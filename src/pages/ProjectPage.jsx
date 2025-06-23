import { useParams } from 'react-router-dom'
import Header from '../Components/Header/Header'
import { PROJECTS } from '../data/PROJECTS'
import { motion } from 'framer-motion'

export default function ProjectPage () {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  return (
    <>
      <Header />
      <section id='project-page'>
        <motion.img src={project.img} alt={project.title} layoutId={`project-image-${project.slug}`} />
      </section>
    </>
  )
}

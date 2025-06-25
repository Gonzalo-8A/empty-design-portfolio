import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../pages/Home.jsx'
import ProjectPage from '../pages/ProjectPage.jsx'

export default function AnimatedRoutes () {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/proyectos/:slug' element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  )
}

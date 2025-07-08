import './App.css'
import { HashRouter } from 'react-router-dom'
import AnimatedRoutes from './routes/AnimatedRoutes.jsx'
import { PageProvider } from './context/page.jsx'
import { useEffect } from 'react'

function App () {
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    updateVh()

    window.addEventListener('resize', updateVh)
    window.addEventListener('orientationchange', updateVh)

    return () => {
      window.removeEventListener('resize', updateVh)
      window.removeEventListener('orientationchange', updateVh)
    }
  }, [])

  return (
    <HashRouter>
      <PageProvider>
        <AnimatedRoutes />
      </PageProvider>
    </HashRouter>
  )
}

export default App

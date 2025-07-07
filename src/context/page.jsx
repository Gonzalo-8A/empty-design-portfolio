import { useState, createContext } from 'react'
import { useLocation } from 'react-router-dom'

export const PageContext = createContext()

export function PageProvider ({ children }) {
  const location = useLocation()
  const [section, setSection] = useState('projects')
  const [scrollTarget, setScrollTarget] = useState(null)

  const isOnHome = location.pathname === '/home'
  return (
    <PageContext.Provider value={{
      section,
      setSection,
      scrollTarget,
      setScrollTarget,
      isOnHome
    }}
    >
      {children}
    </PageContext.Provider>
  )
}

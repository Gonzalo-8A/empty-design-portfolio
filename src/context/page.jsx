import { useState, createContext } from 'react'

export const PageContext = createContext()

export function PageProvider ({ children }) {
  const [section, setSection] = useState('projects')
  const [scrollTarget, setScrollTarget] = useState(null)
  return (
    <PageContext.Provider value={{
      section,
      setSection,
      scrollTarget,
      setScrollTarget
    }}
    >
      {children}
    </PageContext.Provider>
  )
}

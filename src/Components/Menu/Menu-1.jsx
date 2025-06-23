import { useState, useEffect } from 'react'
import { PROJECTS } from '../../data/PROJECTS.js'
import './Menu-1.css'

export default function Menu () {
  const [isOpen, setIsOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => document.body.classList.remove('no-scroll')
  }, [isOpen])

  const handleClickMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <button className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={handleClickMenu}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={handleClickMenu} />
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul className='menu-ul'>
            <li>
              <a className='side-links' href='#inicio'>
                Inicio
              </a>
            </li>
            <li
              className={`projects-menu ${isProjectsOpen ? 'open' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setIsProjectsOpen(!isProjectsOpen)
              }}
            >
              <div className='submenu-header'>
                <span className='menu-item-text'>Proyectos</span>
                <span className={`arrow ${isProjectsOpen ? 'open' : ''}`}>▼</span>
              </div>
              <ul className='submenu'>
                {PROJECTS.map((proj) => (
                  <li key={proj.id} onClick={(e) => e.stopPropagation()}>
                    <a className='project' href={`#${proj.id}`}>
                      {proj.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a className='side-links' href='#contacto'>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

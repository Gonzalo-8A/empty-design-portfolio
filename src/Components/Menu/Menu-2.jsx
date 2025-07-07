import { useState, useEffect, useRef, useContext } from 'react'
import './Menu-2.css'
import { scroller } from 'react-scroll'
import { PageContext } from '../../context/page'
import { useNavigate } from 'react-router-dom'

export default function Menu () {
  const [isOpen, setIsOpen] = useState(false)
  const { setSection, setScrollTarget, isOnHome } = useContext(PageContext)
  const navigate = useNavigate()

  const overlayRef = useRef(null)

  useEffect(() => {
    if (isOpen && overlayRef.current) {
      const body = document.body
      const scrollbarWidth = window.innerWidth - body.offsetWidth

      body.style.overflow = 'hidden'
      body.style.paddingRight = `${scrollbarWidth}px`

      overlayRef.current.style.paddingRight = `${scrollbarWidth}px`

      const ppImgContainer = document.querySelector('.pp-img-container')
      if (ppImgContainer) {
        ppImgContainer.style.paddingRight = `${scrollbarWidth}px`
      }

      return () => {
        body.style.overflow = ''
        body.style.paddingRight = ''
        overlayRef.current.style.paddingRight = ''

        if (ppImgContainer) {
          ppImgContainer.style.paddingRight = ''
        }
      }
    }
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
      <div
        ref={overlayRef}
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={handleClickMenu}
      >
        <ul className='overlay-ul'>
          <li className='overlay-li'>
            <a
              onClick={() => {
                setSection('projects')
                if (!isOnHome) {
                  setScrollTarget('main-content')
                  navigate('/home')
                } else {
                  scroller.scrollTo('main-content', {
                    duration: 1500,
                    smooth: 'easeInOutQuad',
                    offset: 0
                  })
                }
              }}
            >
              PROYETOS
            </a>
          </li>
          <li className='overlay-li'>
            <a
              onClick={() => {
                if (!isOnHome) {
                  setScrollTarget('footer')
                  navigate('/home')
                } else {
                  scroller.scrollTo('footer', {
                    duration: 1500,
                    smooth: 'easeInOutQuad',
                    offset: 0
                  })
                }
              }}
            >
              CONTACTO
            </a>
          </li>
          <li className='overlay-li'>
            <a
              onClick={() => {
                setSection('personal')
                if (!isOnHome) {
                  setScrollTarget('main-content')
                  navigate('/home')
                } else {
                  scroller.scrollTo('main-content', {
                    duration: 1500,
                    smooth: 'easeInOutQuad',
                    offset: 0
                  })
                }
              }}
            >
              SOBRE MÍ
            </a>
          </li>
          <li className='overlay-li'>
            <a href=''>RESERVA ONLINE</a>
          </li>
        </ul>
      </div>
    </>
  )
}

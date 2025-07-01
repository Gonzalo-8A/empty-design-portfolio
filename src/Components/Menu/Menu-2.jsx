import { useState, useEffect, useRef } from 'react'
import './Menu-2.css'

export default function Menu () {
  const [isOpen, setIsOpen] = useState(false)

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
            <a href='#main-content'>PROYETOS</a>
          </li>
          <li className='overlay-li'>
            <a href='#footer'>CONTACTO</a>
          </li>
          <li className='overlay-li'>
            <a href=''>SOBRE MÍ</a>
          </li>
          <li className='overlay-li'>
            <a href=''>RESERVA ONLINE</a>
          </li>
        </ul>
      </div>
    </>
  )
}

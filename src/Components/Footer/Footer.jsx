import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer () {
  return (
    <section id='footer'>
      <div className='social-media-links'>
        <div className='links-head'>
          <span>Contáctame</span>
          <span>y empecemos a hacerlo realidad</span>
        </div>
        <div className='icons-wrapper'>
          <a
            href='https://instagram.com/emptyydesign_'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
            className='icon instagram'
          >
            <FontAwesomeIcon icon={faInstagram} size='3x' />
          </a>
          <a
            href='https://www.linkedin.com/in/estefania-delgado-castro-82670022b/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='icon linkedin'
          >
            <FontAwesomeIcon icon={faLinkedin} size='3x' />
          </a>
          <a
            href='https://wa.me/34603697023'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp'
            className='icon whatsapp'
          >
            <FontAwesomeIcon icon={faWhatsapp} size='3x' />
          </a>
          <a
            href='mailto:estefaniadelgadodesign@gmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola!'
            target='_blank'
            aria-label='Email'
            className='icon gmail'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faEnvelope} size='3x' />
          </a>
        </div>
      </div>
      <div className='footer-name'>
        <div className='marquee'>
          <div className='marquee-content'>
            <span>EMPTY DESIGN</span>
            <span aria-hidden='true'>EMPTY DESIGN</span>
          </div>
          <div className='marquee-content' aria-hidden='true'>
            <span>EMPTY DESIGN</span>
            <span aria-hidden='true'>EMPTY DESIGN</span>
          </div>
        </div>
      </div>
    </section>
  )
}

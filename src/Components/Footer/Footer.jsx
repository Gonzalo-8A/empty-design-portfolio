import './Footer.css'

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
            href='https://instagram.com/tu_usuario'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
            className='icon instagram'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='75'
              height='75'
            >
              <path d='M7.75 2C4.903 2 2.75 4.153 2.75 7v10c0 2.847 2.153 5 5 5h8.5c2.847 0 5-2.153 5-5V7c0-2.847-2.153-5-5-5h-8.5zm0 2h8.5c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3h-8.5c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm4.25 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm3.75-.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
            </svg>
          </a>
          <a
            href='https://linkedin.com/in/tu_usuario'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='icon linkedin'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='75'
              height='75'
            >
              <path d='M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v13h-4V8zm7 0h3.7v1.85h.05c.51-.97 1.75-2 3.6-2 3.85 0 4.55 2.53 4.55 5.82V21h-4v-5.55c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93V21h-4V8z' />
            </svg>
          </a>
          <a
            href='https://facebook.com/tu_usuario'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
            className='icon facebook'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='75'
              height='75'
            >
              <path d='M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5v-2.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.7v2h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z' />
            </svg>
          </a>
          <a
            href='https://twitter.com/tu_usuario'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
            className='icon twitter'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='75'
              height='75'
            >
              <path d='M23 4.5a9.3 9.3 0 0 1-2.7.75 4.7 4.7 0 0 0 2-2.6 9.4 9.4 0 0 1-3 1.15 4.6 4.6 0 0 0-7.9 4.2A13.1 13.1 0 0 1 1.7 3.15a4.6 4.6 0 0 0 1.4 6.15 4.4 4.4 0 0 1-2-.55v.05a4.6 4.6 0 0 0 3.7 4.5 4.5 4.5 0 0 1-2 .08 4.6 4.6 0 0 0 4.3 3.2 9.2 9.2 0 0 1-5.7 2 9.4 9.4 0 0 1-1.1-.06 13 13 0 0 0 7 2.05c8.4 0 13-7 13-13v-.6A9.4 9.4 0 0 0 23 4.5z' />
            </svg>
          </a>
        </div>
      </div>
      <div className='footer-name'>
        <span>EMPTY DESIGN</span>
      </div>
    </section>
  )
}

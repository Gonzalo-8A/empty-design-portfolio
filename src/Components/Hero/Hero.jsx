import './Hero.css'
import project1 from '../../assets/project-1.png'
import project2 from '../../assets/project-2.jpeg'
import project3 from '../../assets/project-3.jpg'
import project4 from '../../assets/project-4.png'
import project5 from '../../assets/project-5.jpg'
import project5Extra1 from '../../assets/project-5-extra1.avif'
import project5Extra2 from '../../assets/project-5-extra2.avif'
import project5Extra3 from '../../assets/project-5-extra3.avif'
import project6 from '../../assets/project-6.jpg'
import project7 from '../../assets/project-7.avif'
import project8 from '../../assets/project-8.png'
import project9 from '../../assets/project-9.png'

import { useEffect, useRef } from 'react'
import { scroller } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Hero () {
  const backgroundContainerRef = useRef([])
  const titleRef = useRef(null)
  const isHoveringTitle = useRef(false)

  useEffect(() => {
    const directions = ['normal', 'reverse', 'normal', 'reverse']
    const speeds = [70, 55, 60, 50]
    const carousels = backgroundContainerRef.current.querySelectorAll('.infinite-carousel')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting
          carousels.forEach((carousel) => {
            const carouselInner = carousel.querySelector('div')
            if (carouselInner) {
              carouselInner.style.animationPlayState = isVisible ? 'running' : 'paused'
            }
          })
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px'
      }
    )

    carousels.forEach((carousel, i) => {
      const carouselInner = carousel.querySelector('div')
      if (!carouselInner || carouselInner.dataset.duplicated === 'true') return

      const originalChildren = Array.from(carouselInner.children)

      for (let d = 0; d < 3; d++) {
        originalChildren.forEach((item) => {
          const clone = item.cloneNode(true)
          carouselInner.appendChild(clone)
        })
      }

      carouselInner.dataset.duplicated = 'true'
      carouselInner.style.animation = `move ${speeds[i]}s linear infinite ${directions[i]}`
    })

    if (backgroundContainerRef.current) {
      observer.observe(backgroundContainerRef.current)
    }

    return () => {
      if (backgroundContainerRef.current) {
        observer.unobserve(backgroundContainerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const title = titleRef.current

    const handleGlobalMouseMove = (e) => {
      if (isHoveringTitle.current) {
        const x = e.clientX
        const y = e.clientY

        title.style.setProperty('--x', `${x}px`)
        title.style.setProperty('--y', `${y}px`)
      }
    }

    const handleMouseEnter = () => {
      isHoveringTitle.current = true
      title.classList.add('reveal-hover')
    }

    const handleMouseLeave = () => {
      isHoveringTitle.current = false
      title.classList.remove('reveal-hover')
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)

    title.addEventListener('mouseenter', handleMouseEnter)
    title.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      title.removeEventListener('mouseenter', handleMouseEnter)
      title.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleScroll = () => {
    scroller.scrollTo('main-content', {
      duration: 1500,
      smooth: 'easeInOutQuad',
      offset: 0
    })
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className='hero'
      id='hero-content'
    >
      <div className='background-container' ref={backgroundContainerRef}>
        <div className='infinite-carousel'>
          <div>
            <img src={project1} alt='Image from different projects for Background' />
            <img src={project2} alt='Image from different projects for Background' />
            <img src={project3} alt='Image from different projects for Background' />
            <img src={project8} alt='Image from different projects for Background' />
          </div>
        </div>
        <div className='infinite-carousel'>
          <div>
            <img src={project4} alt='Image from different projects for Background' />
            <img src={project5} alt='Image from different projects for Background' />
            <img src={project6} alt='Image from different projects for Background' />
            <img src={project5Extra1} alt='Image from different projects for Background' />
          </div>
        </div>
        <div className='infinite-carousel'>
          <div>
            <img src={project7} alt='Image from different projects for Background' />
            <img src={project5Extra2} alt='Image from different projects for Background' />
            <img src={project9} alt='Image from different projects for Background' />
            <img src={project5Extra3} alt='Image from different projects for Background' />
          </div>
        </div>
        <div className='infinite-carousel'>
          <div>
            <img src={project2} alt='Image from different projects for Background' />
            <img src={project5} alt='Image from different projects for Background' />
            <img src={project7} alt='Image from different projects for Background' />
          </div>
        </div>
      </div>
      <div className='hero-text'>
        <div>
          <h1 className='hero-title' data-text='Empty Design' ref={titleRef}>
            Empty Design
          </h1>
        </div>
      </div>
      <span className='hero-arrow' onClick={handleScroll}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='80'
          height='80'
          viewBox='0 0 24 24'
          fill='white'
        >
          <path d='M12 16.5L5 9.5L6.4 8.1L12 13.7L17.6 8.1L19 9.5L12 16.5Z' />
        </svg>
      </span>
    </motion.section>
  )
}

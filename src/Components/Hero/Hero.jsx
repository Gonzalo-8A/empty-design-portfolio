import './Hero.css'
import {
  project1, project2, project3, project4,
  project5, project5Extra1, project5Extra2, project5Extra3,
  project6, project7, project8, project9
} from '../../assets'

import { useEffect, useRef, useState } from 'react'
import { scroller } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Hero () {
  const backgroundContainerRef = useRef(null)
  const titleRef = useRef(null)
  const isHoveringTitle = useRef(false)
  const totalImages = 16 * 4
  const loadCount = useRef(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const handleImageLoad = () => {
    loadCount.current++
    if (loadCount.current === totalImages) {
      setImagesLoaded(true)
    }
  }

  useEffect(() => {
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
      className={`hero ${imagesLoaded ? 'ready' : 'not-ready'}`}
      id='hero-content'
    >
      <div className='background-container' ref={backgroundContainerRef}>
        <div className='infinite-carousel'>
          <div style={{ animation: 'move 70s linear infinite normal' }}>
            <img
              loading='lazy' src={project1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project3} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project8} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project3} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project8} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project3} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project8} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project3} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project8} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
          </div>
        </div>
        <div className='infinite-carousel'>
          <div style={{ animation: 'move 55s linear infinite reverse' }}>
            <img
              loading='lazy' src={project4} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project6} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project4} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project6} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project4} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project6} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project4} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project6} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
          </div>
        </div>
        <div className='infinite-carousel'>
          <div style={{ animation: 'move 60s linear infinite normal' }}>
            <img
              loading='lazy' src={project7} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project9} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra3} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />{' '}
            <img
              loading='lazy' src={project7} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project9} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra3} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />{' '}
            <img
              loading='lazy' src={project7} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project9} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra3} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />{' '}
            <img
              loading='lazy' src={project7} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project9} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5Extra3} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
          </div>
        </div>
        <div className='infinite-carousel'>
          <div style={{ animation: 'move 50s linear infinite reverse' }}>
            <img
              loading='lazy' src={project2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project7} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />{' '}
            <img
              loading='lazy' src={project2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project7} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />{' '}
            <img
              loading='lazy' src={project2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project7} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />{' '}
            <img
              loading='lazy' src={project2} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project1} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project5} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
            <img
              loading='lazy' src={project7} alt='Image from different projects for Background' onLoad={handleImageLoad}
              onError={handleImageLoad}
            />
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

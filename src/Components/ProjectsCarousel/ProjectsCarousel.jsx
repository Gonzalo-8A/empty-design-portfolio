import './ProjectsCarousel.css'

import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { motion } from 'framer-motion'
// import ProjectsInfo from '../ProjectsInfo/ProjectsInfo'
import { useNavigate } from 'react-router-dom'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max)

const ProjectsCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [isHovering, setIsHovering] = useState(false)
  const tweenFactor = useRef(0)
  const navigate = useNavigate()

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, tweenOpacity])

  useEffect(() => {
    if (!emblaApi) return
    const lastIndex = parseInt(localStorage.getItem('lastProjectIndex'), 10) || 0
    emblaApi.scrollTo(lastIndex)
    localStorage.removeItem('lastProjectIndex')
  }, [emblaApi])

  const handleClick = (slug, index) => {
    localStorage.setItem('lastProjectIndex', index.toString())
    console.log(slides[0])
    navigate(`/proyectos/${slug}`)
  }

  return (
    <>
      <motion.div
        className='embla'
        key='projects'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='embla-title'>
          <h2>Nuestros proyectos</h2>
        </div>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map((slide, index) => (
              <div className='embla__slide' key={index}>
                <img
                  className={`embla__slide__img ${isHovering ? 'blur-effect' : ''}`}
                  src={slide.img}
                  alt={`Slide image for ${slide.title} project.`}
                />
                <button
                  className='slide-btn'
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={() => handleClick(slide.slug, index)}
                >
                  Ver Proyecto
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className='embla__controls'>
          <div className='embla__buttons'>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
          <div className='embla__dots'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      </motion.div>
      {/* <ProjectsInfo index={selectedIndex} /> */}
    </>
  )
}

export default ProjectsCarousel

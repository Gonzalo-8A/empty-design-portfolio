import { useEffect, useContext, useLayoutEffect } from 'react'
import { scroller } from 'react-scroll'
import { PageContext } from '../context/page'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import MainContent from '../components/MainContent/MainContent'

export default function Home () {
  const { scrollTarget, setScrollTarget } = useContext(PageContext)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (scrollTarget) {
      scroller.scrollTo(scrollTarget, {
        duration: 2000,
        smooth: 'easeInOutQuad',
        offset: 0
      })
      setScrollTarget(null)
    }
  }, [scrollTarget, setScrollTarget])

  return (
    <>
      <Hero />
      <MainContent />
      <Footer />
    </>
  )
}

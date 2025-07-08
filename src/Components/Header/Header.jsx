import { scroller } from 'react-scroll'
import logo from '../../assets/logo.png'
import Menu from '../Menu/Menu-2.js'
import './Header.css'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header () {
  const location = useLocation()
  const navigate = useNavigate()
  const isOnHome = location.pathname === '/home'

  const handleScroll = () => {
    if (isOnHome) {
      scroller.scrollTo('hero-content', {
        duration: 1500,
        smooth: 'easeInOutQuad',
        offset: 0
      })
    } else {
      navigate('/')
    }
  }

  return (
    <header>
      <img src={logo} alt='Empty Design Logo' className='header-logo' />
      <h1 className='header-name' onClick={handleScroll}>
        Empty Design
      </h1>
      <Menu />
    </header>
  )
}

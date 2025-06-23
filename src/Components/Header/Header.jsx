import logo from '../../assets/logo.png'
import Menu from '../Menu/Menu-2.jsx'
import './Header.css'

export default function Header () {
  return (
    <header>
      <img src={logo} alt='Empty Design Logo' className='header-logo' />
      <h1 className='header-name'>Empty Design</h1>
      <Menu />
    </header>
  )
}

import './App.css'
import { HashRouter } from 'react-router-dom'
import AnimatedRoutes from './routes/AnimatedRoutes.jsx'
import { PageProvider } from './context/page.jsx'

function App () {
  return (
    <HashRouter>
      <PageProvider>
        <AnimatedRoutes />
      </PageProvider>
    </HashRouter>
  )
}

export default App

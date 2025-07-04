import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from './routes/AnimatedRoutes.jsx'
import { PageProvider } from './context/page.jsx'

function App () {
  return (
    <BrowserRouter>
      <PageProvider>
        <AnimatedRoutes />
      </PageProvider>
    </BrowserRouter>
  )
}

export default App

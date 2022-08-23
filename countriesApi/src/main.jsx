import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// components
// import App from './components/App'
import Router from './router'

createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

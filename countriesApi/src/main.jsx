import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// components
// import App from './components/App'
import App from './pages/App'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/dashboard' element={<Dashboard />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path='store' element={<p>Store</p>} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route
          path='*'
          element={<Navigate to='/404' replace />}
        />
        <Route
          path='/404'
          element={<p className='container'>Page not found - 404</p>}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import App from './pages/App'
import Country from './pages/Country'

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:idCode' element={<Country />} />
      </Routes>
    </Layout>
  )
}

export default Router

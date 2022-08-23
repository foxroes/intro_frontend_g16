import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className='container py-5'>
        {children}
      </section>
      <Footer />
    </>
  )
}

export default Layout

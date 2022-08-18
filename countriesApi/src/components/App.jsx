import { useEffect, useState } from 'react'

// services
import { axiosData } from '../services/fetchData'

// components
import Layout from '../layout'
import Card from './common/Card'
import Loading from './common/Loading'

function App () {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const data = async () => {
      const res = await axiosData()
      setCountries(res)
    }
    data()
  }, [])

  return (
    <Layout>
      <section className='container py-5'>
        <section className='row gy-4'>
          {
            countries.length === 0
              ? <Loading />
              : countries.map((country, index) => (
                <aside key={index} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                  <Card {...country} />
                </aside>
              ))
          }
        </section>
      </section>
    </Layout>
  )
}

export default App

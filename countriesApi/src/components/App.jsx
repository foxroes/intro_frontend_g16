import { useEffect, useState } from 'react'
import Layout from '../layout'
import { axiosData } from '../services/fetchData'
import Card from './common/Card'

function App () {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const data = async () => {
      const res = await axiosData()
      setCountries(res)
    }
    data()
  }, [])

  // comentario

  return (
    <Layout>
      <section className='container'>
        <section className='row'>
          {
            countries.length === 0
              ? <p className='m-0'>Loading...</p>
              : countries.map((country, index) => (
                <Card key={index} {...country} />)
              )
          }
        </section>
      </section>
    </Layout>
  )
}

export default App

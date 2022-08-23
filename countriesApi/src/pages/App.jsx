// hooks
import useGetData from '../hooks/useGetData'

// components
import Card from '../components/common/Card'
import Loading from '../components/common/Loading'

function App () {
  const countries = useGetData('https://restcountries.com/v3.1/all')

  return (
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
  )
}

export default App

import { useParams } from 'react-router-dom'
import Loading from '../components/common/Loading'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { idCode } = useParams()

  const country = useGetData(`https://restcountries.com/v3.1/alpha/${idCode}`)

  const { flags, name } = country.length !== 0 && country[0]

  return (
    country.length === 0
      ? <Loading />
      : (
        <div className='text-center'>
          <img width='400px' src={flags.svg} alt={name.common} />
          <h4 className='mt-3'>{name.common}</h4>
        </div>
        )
  )
}

export default Country

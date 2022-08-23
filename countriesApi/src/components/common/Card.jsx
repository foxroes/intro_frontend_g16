import { Link } from 'react-router-dom'
import '../../styles/card.css'
import { lowerCase } from '../../utils/lowerCase'

const Card = ({ flags, name, cca3 }) => {
  const lowerCode = lowerCase(cca3)
  return (
    <Link to={`/${lowerCode}`}>
      <article className='card bg-secondary text-light'>
        <img loading='lazy' src={flags?.svg} className='card-img-top' alt={name?.common} />
        <div className='card-body'>
          <h5 className='card-title m-0'>{name?.common}</h5>
        </div>
      </article>
    </Link>
  )
}

export default Card

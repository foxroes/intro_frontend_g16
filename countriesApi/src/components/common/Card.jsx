import '../../styles/card.css'

const Card = ({ flags, name }) => {
  return (
    <article className='card bg-secondary text-light'>
      <img loading='lazy' src={flags?.svg} className='card-img-top' alt={name?.common} />
      <div className='card-body'>
        <h5 className='card-title m-0'>{name?.common}</h5>
      </div>
    </article>
  )
}

export default Card

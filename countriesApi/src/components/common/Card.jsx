const Card = ({ flags, name }) => {
  return (
    <div className='card'>
      <img src={flags?.svg} className='card-img-top' alt={name?.common} />
      <div className='card-body'>
        <h5 className='card-title'>{name?.common}</h5>
      </div>
    </div>
  )
}

export default Card

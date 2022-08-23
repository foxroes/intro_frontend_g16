import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>Countries API</Link>
        <button className='navbar-toggler' type='button'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse'>
          <form className='d-flex ms-auto' role='search'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Header

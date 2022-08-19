import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'>Logo</a>
        <button className='navbar-toggler' type='button'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/dashboard/store'>Store</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

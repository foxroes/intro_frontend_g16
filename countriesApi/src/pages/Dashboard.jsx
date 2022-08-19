import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <section className='container'>
      <p>Dashboard</p>
      <Outlet />
    </section>
  )
}

export default Dashboard

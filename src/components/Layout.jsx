import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="page-wrap">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

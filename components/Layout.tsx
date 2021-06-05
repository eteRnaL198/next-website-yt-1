import { NextPage } from 'next'
import Navbar from './NavBar'
import Footer from './Footer'

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
import Footer from './Footer'
import Navbar from './navbar'
const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
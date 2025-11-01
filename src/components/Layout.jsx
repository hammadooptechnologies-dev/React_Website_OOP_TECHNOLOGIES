import Footer from './Footer'
import Navbar from './Navbar'
import NeedHelpPanel from './NeedHelpPanel'
const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <div className="relative overflow-hidden">
          <NeedHelpPanel />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
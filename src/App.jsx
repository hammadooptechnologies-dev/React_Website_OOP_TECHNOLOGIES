import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Layout from './components/Layout';
import './App.css'
import Portfolio from './pages/Portfolio';
import SingleServicePage from './pages/slug';
import ContactPage from './pages/Contact';
import HireDeveloper from './pages/HireDeveloper';
import FaqsPage from './pages/FaqsPage';
import PricingPlan from './pages/PricingPlan';
import About from './pages/About';
import ShopByIndustry from './pages/ShopByIndustry';
import Blog from './pages/Blog';
import SingleBlogDetail from './pages/SingleBlogDetail';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<SingleServicePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hire-a-developer" element={<HireDeveloper/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pricing-plan" element={<PricingPlan/>}/>
          <Route path="/shop-by-industry" element={<ShopByIndustry/>}/>
          <Route path="/Faq" element={<FaqsPage/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:slug" element={<SingleBlogDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

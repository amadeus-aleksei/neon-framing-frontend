import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"

import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Services from './pages/ServicesPage'

import './styles/styles.scss'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Homepage />} />
            <Route path="/about" element={<Homepage />} />
            <Route path="/contact" element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"

import Footer from './components/common/Footer'
import Header from './components/common/Header'
import './styles/styles.scss'
import Pricing from "./pages/Pricing"
import GoogleMapsAPI from "./components/sections/GoogleMapsAPI"

function App() {
  return (
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Pricing />} />
            <Route path="/services/google-maps" element={<GoogleMapsAPI />} />
            <Route path="/collection" element={<Homepage />} />
            <Route path="/about" element={<Homepage />} />
            <Route path="/contact" element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  )
}

export default App

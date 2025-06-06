import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import Footer from './components/common/Footer'
import Header from './components/common/Header'
import './styles/styles.scss'
import Pricing from "./pages/Pricing"
import GoogleMapsAPI from "./pages/GoogleMapsAPI"
import Test from "./pages/Test";
import FormDemo from "./pages/FormDemo";

function App() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={['marker', 'places']} mapIds={['DEMO_MAP_ID']}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Pricing />} />
            <Route path="/services/google-maps" element={<GoogleMapsAPI />} />
            <Route path="/services/form-demo" element={<FormDemo />} />
            <Route path="/collection" element={<Homepage />} />
            <Route path="/about" element={<Homepage />} />
            <Route path="/contact" element={<Homepage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LoadScript>

  )
}

export default App

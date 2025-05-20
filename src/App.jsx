import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import './styles/styles.scss'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

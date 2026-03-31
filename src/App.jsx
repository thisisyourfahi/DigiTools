import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './components/header/Banner/Banner'
import Hero from './components/header/Hero/Hero'
import Nav from './components/header/Nav/Nav'
import ProductSection from './components/main/ProductSection'

function App() {

  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <Banner></Banner>

      <ProductSection></ProductSection>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App

import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './components/header/Banner/Banner'
import Hero from './components/header/Hero/Hero'
import Nav from './components/header/Nav/Nav'
import ProductSection from './components/main/ProductSection'
import Steps from './components/main/Steps/Steps'

function App() {

  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <Banner></Banner>

      <ProductSection></ProductSection>

      {/* non functional */}
      <Steps></Steps>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App

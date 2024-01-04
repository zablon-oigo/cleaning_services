import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Reviews from "./components/Reviews"
import Services from "./components/Services"
import Why from "./components/Why"


function App() {


  return (
    <>
  <div id="home">
  <Navbar/>
  </div>
  <div id="about">
    <About/>
  </div>
  <div id="services">
    <Services/>
  </div>
  <div id="why">
    <Why/>
  </div>
  <div id="reviews">
    <Reviews/>
  </div>
  <div id="contact">
    <Contact/>
  </div>
  <div id="footer">
    <Footer/>
  </div>
    </>
  )
}

export default App

import { BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Works from './components/Works'
import Feedbacks from './components/Feedbacks'
import Contact from "./components/Contact"
import StartsCanvas from "./components/StartsCanvas"


const App = () => {

  return (

    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </div>

      <div className="relatie z-1 bg-primary">
        <StartsCanvas />
        <Contact />
      </div>
    </BrowserRouter>

  )
}

export default App

import './App.css'
import Navbar from './components/templates/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Project from './components/sections/Project.jsx'
import Skill from './components/sections/Skill.jsx'
import Footer from './components/sections/Footer.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
      <Footer/>
    </>
  )
}

export default App

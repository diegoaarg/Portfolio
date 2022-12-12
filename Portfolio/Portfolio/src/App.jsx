import React, {useEffect, useState} from "react"
import Intro from "./componentes/Intro"
import Timeline from "./componentes/Timeline"
import Portfolio from "./componentes/Portfolio"
import Skills from "./componentes/Skills"
import Footer from "./componentes/Footer"
import Contact from "./componentes/Contact"


function App() {
  
  return (
    <div className="App ">
      <Intro />
      <Timeline />
      <Portfolio />
      <Skills/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App

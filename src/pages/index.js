import React from "react"
import {Link} from "gatsby"
import Header from "./components/header"
export default function Home() {
  return (
  <div>
    <h1> Lightsabers</h1> 
    <h2  style = {{color : 'CornflowerBlue'}}>
      Jedi</h2>
      <h3>Grand Masters</h3>
        <p>Master Yoda</p>
        <a href = "https://starwars.fandom.com/wiki/Yoda%27s_lightsaber">
          <img src = "https://vignette.wikia.nocookie.net/starwars/images/d/d1/YodasLightsaber-SoH.png/revision/latest?cb=20190810003559"
            width = "362" height = "290"/>
        </a>
        <a href = "https://starwars.fandom.com/wiki/Yoda%27s_lightsaber">
          <img src = 'https://vignette.wikia.nocookie.net/starwars/images/f/fe/YodaLightsaber.JPG/revision/latest?cb=20120604013743'
            width = "591" height = "212" />
        </a>
    <h2  style = {{color : 'Red'}}>
      Sith</h2>
      <h3>Sith Lord</h3>
        <p>Darth Vader</p>
        <a href = "https://starwars.fandom.com/wiki/Darth_Vader%27s_lightsaber">
          <img src = "https://vignette.wikia.nocookie.net/starwars/images/0/0a/Battlefront_Vader.jpg/revision/latest?cb=20181211045721"
            width = "223" height = "313" />
        </a>
        <a href = "https://starwars.fandom.com/wiki/Darth_Vader%27s_lightsaber">
          <img src = "https://vignette.wikia.nocookie.net/starwars/images/a/a3/Vaders-lightsaber.jpeg/revision/latest?cb=20190226163823"
            width = "297" height = "149" />
        </a>
    <br/><Link to="/contact/">Contact</Link>
  </div>
  )
}

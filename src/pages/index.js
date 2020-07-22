import React from "react"
import {Link} from "gatsby"
import Header from "./components/header"
import "./index.css"

export default function Home() {
  return (
    <div0>
    <h1> Lightsabers</h1> 

    <div id = "searcher">
      <h2>Find your dedicated lightsaber!</h2>
      <p>Choose one</p>
      <form>
        <div id = "pick_side">
          <label for = "light">Light Side</label>
          <input type = "radio" id = "light" name = "side"></input>
          <label for = "dark">Dark Side</label>
          <input type = "radio" id = "dark" name = "side"></input>
        </div>
      <input type = "submit"></input>
      </form>
      <a href = "#jedi">go to</a>
    </div>

    <div id = "jedi">
      <h2  style = {{color : 'CornflowerBlue'}}>
      Jedi</h2>
        <h3>Grand Masters</h3>
          <p>Master Yoda</p>
            <a href = "https://starwars.fandom.com/wiki/Yoda%27s_lightsaber">
              <img src = "https://vignette.wikia.nocookie.net/starwars/images/d/d1/YodasLightsaber-SoH.png/revision/latest?cb=20190810003559"
                width = "362" height = "290"/></a>
            <a href = "https://starwars.fandom.com/wiki/Yoda%27s_lightsaber">
              <img src = 'https://vignette.wikia.nocookie.net/starwars/images/f/fe/YodaLightsaber.JPG/revision/latest?cb=20120604013743'
                width = "362" height = "150" /></a>
        <h3>Jedi Master</h3>
          <p>Obi-wan Kenobi</p>
          <a href = "https://starwars.fandom.com/wiki/Obi-Wan_Kenobi">
          <img src = "https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/10/obi-wan-2f98.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1"
            width = "362" height = "175" />
        </a>
        <a href = "https://starwars.fandom.com/wiki/Obi-Wan_Kenobi%27s_first_lightsaber">
          <img src = "https://vignette.wikia.nocookie.net/starwars/images/1/1b/Obi-Wan_Kenobis_first_lightsaber_-_SW_Card_Trader.png/revision/latest?cb=20160710021446"
            width = "362" height = "220" />
        </a>
      </div>
    <div id = "sith">
    <h2  style = {{color : 'Red'}}>
      Sith</h2>
      <h3>Sith Lord</h3>
        <p>Darth Vader</p>
          <a href = "https://starwars.fandom.com/wiki/Darth_Vader%27s_lightsaber">
          < img src = "https://vignette.wikia.nocookie.net/starwars/images/0/0a/Battlefront_Vader.jpg/revision/latest?cb=20181211045721"
              width = "362" height = "500" />
          </a>
          <a href = "https://starwars.fandom.com/wiki/Darth_Vader%27s_lightsaber">
            <img src = "https://vignette.wikia.nocookie.net/starwars/images/a/a3/Vaders-lightsaber.jpeg/revision/latest?cb=20190226163823"
              width = "362" height = "180" />
          </a>
      <h3>Inquisitors</h3>
        <p>Second Sister</p>
          <a href = "https://starwars.fandom.com/wiki/Second_Sister">
            <img src = "https://cdn.vox-cdn.com/thumbor/RZ1QzF4IZK_EmmoVXgVghU1nZT4=/0x0:3840x2160/1820x1213/filters:focal(1563x496:2177x1110)/cdn.vox-cdn.com/uploads/chorus_image/image/65712500/star_wars_jedi_wallpaper_16x9_3.0.jpg"
              width = "362" height = "241" />
          </a>
          <a href = "https://starwars.fandom.com/wiki/Second_Sister">
            <img src = "https://vignette.wikia.nocookie.net/starwars/images/c/c2/Second_sister%27s_lightsaber.png/revision/latest?cb=20200222072924"
             width = "362" height = "250" />
          </a>
    <br/><Link to="/contact/">Contact</Link>
    </div>
    </div0>
  )
}

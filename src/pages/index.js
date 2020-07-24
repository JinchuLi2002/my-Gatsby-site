import React from "react"
import {Link} from "gatsby"
import Header from "./components/header"
import "./index.css"
import Character from "./components/sw_character/sw_character"
import Container from "./components/container/container"

function hide(id){
  var x = document.getElementById(id);
  x.style.display = "none";
}

function unhide(id){
  var x = document.getElementById(id);
  x.style.display = "inline";
}

function findSaber(){
  document.getElementById("jedi").style.display = "inline";//test
  if (document.getElementById("light").checked){
    hide("pickSide");
  }
}


export default function Home() {
  return (
    <div>
    <h1> Lightsabers</h1> 

    <div id = "searcher">
      <h2>Find your dedicated lightsaber!</h2>
      <p>Choose one</p>
      <form>
        <div id = "pickSide">
          <label htmlFor = "light">Light Side</label>
          <input type = "radio" id = "light" name = "side"></input>
          <label htmlFor = "dark">Dark Side</label>
          <input type = "radio" id = "dark" name = "side"></input>
          <button onClick={findSaber}>next</button>
        </div>
      </form>
      <a href = "#jedi">go to</a>
    </div>

    <div id = "jedi" style = {{display: "inline"}}>
      <h2  style = {{color : 'CornflowerBlue'}}>
      Jedi</h2>
        <h3>Grand Masters</h3>

        <Character
          name = "Master Yoda"
          characterImg = "https://vignette.wikia.nocookie.net/starwars/images/d/d1/YodasLightsaber-SoH.png/revision/latest?cb=20190810003559"
          saberImg ="https://vignette.wikia.nocookie.net/starwars/images/f/fe/YodaLightsaber.JPG/revision/latest?cb=20120604013743"
          excerpt = "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering."
        />
         
        <h3>Jedi Master</h3>

        <Character
          name = "Obi-wan Kenobi"
          characterImg = "https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/10/obi-wan-2f98.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1"
          saberImg ="https://vignette.wikia.nocookie.net/starwars/images/1/1b/Obi-Wan_Kenobis_first_lightsaber_-_SW_Card_Trader.png/revision/latest?cb=20160710021446"
          excerpt = "Only a Sith deals in absolutes."
        />

      </div>
    <div id = "sith" style = {{display: "inline"}}>
    <h2  style = {{color : 'Red'}}>
      Sith</h2>
      <h3>Sith Lord</h3>
        
      <Character
          name = "Darth Vader"
          characterImg = "https://vignette.wikia.nocookie.net/starwars/images/0/0a/Battlefront_Vader.jpg/revision/latest?cb=20181211045721"
          saberImg ="https://vignette.wikia.nocookie.net/starwars/images/a/a3/Vaders-lightsaber.jpeg/revision/latest?cb=20190226163823"
          excerpt = "When I left you, I was but the learner. Now I am the master."
        />
      

      <h3>Inquisitors</h3>
      <Character
          name = "Second Sister"
          characterImg = "https://cdn.vox-cdn.com/thumbor/RZ1QzF4IZK_EmmoVXgVghU1nZT4=/0x0:3840x2160/1820x1213/filters:focal(1563x496:2177x1110)/cdn.vox-cdn.com/uploads/chorus_image/image/65712500/star_wars_jedi_wallpaper_16x9_3.0.jpg"
          saberImg ="https://vignette.wikia.nocookie.net/starwars/images/c/c2/Second_sister%27s_lightsaber.png/revision/latest?cb=20200222072924"
          excerpt = "We seek a dangerous fugitive. This is no common anarchist but a devotee of the treasonous Jedi Order. Turn yourself in or everyone present shall face summary execution."
        />

    <br/><Link to="/contact/">Contact</Link>
    </div>
    </div>
  )
}


import React from "react"
import Container from "../container/container"
import Styles from "./sw_character.module.css"




  export default function Character(props) {
    return (
    <div className={Styles.character}>
        <div className={Styles.description}>
          <h2 className={Styles.name}>{props.name}</h2>
          <p className={Styles.excerpt}>{props.excerpt}</p>
        </div>
      <img src={props.characterImg} className={Styles.characterImg} alt="" />
      <img src={props.saberImg} className={Styles.saberImg} alt=""/>
    </div>
    )
  }
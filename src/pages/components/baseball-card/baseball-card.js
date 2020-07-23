
import "../container/container.js"
import React from "react"


const Card = (props) => {
	const style = {
		backgroundImage: "url("+ props.player.frontImageUrl +")",
		backgroundPosition: "center center",
		backgroundSize: "auto 100%"
	}
	return(
		<div 
 			className="card front" 
 			style={ style }
 		>
 			
 		</div>
	);
}

export default Card
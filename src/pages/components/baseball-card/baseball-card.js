
import React from "react"
import styles from './baseball-card.module.css'

const BaseballCard = (props) => {
	let { placeholderText } = props;

	return(
		<div className={styles.baseballCard}>
 			{placeholderText}
 		</div>
	);
}

export default BaseballCard
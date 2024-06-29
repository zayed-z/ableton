import React from "react";
import styles from "./Content0.module.css";
import backGroundImage from "./../../assets/header.avif";

function Content0() {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.imgContainer}>
				<img src={backGroundImage} alt="Hero" />
				
			</div>
			<div className={styles.textContainer}>
				<h1>Ableton</h1>
			</div>
		</div>
	);
}

export default Content0;

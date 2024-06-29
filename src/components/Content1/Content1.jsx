import React from 'react'
import styles from './Content1.module.css'
import Image from './../../assets/photo1.jpg';
import Image2 from './../../assets/photo22.jpg';

function Content1() {
	return (
		<div className={styles.containerHero}>
			

			<div className={styles.yellowHero}>
				<div className={styles.image2}>
					<img src={Image2} alt="" />

				</div>
			</div>
			
			<div className={styles.image1}>
				<img src={Image} alt="" />
			</div>
			

		</div>
	)
}

export default Content1
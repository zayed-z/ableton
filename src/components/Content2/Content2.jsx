import React from 'react'
import styles from './Content2.module.css'
import Image from './../../assets/photo3.jpg'
import Image2 from './../../assets/photo4.jpg'
import Image3 from './../../assets/photo5.jpg'

function Content2() {
  return (
	<div className={styles.containerHero}>
			

			<div className={styles.yellowHero}>
				<div className={styles.image2}>
					<img src={Image} alt="" />

				</div>
				<div className={styles.image2}>
					<img src={Image2} alt="" />

				</div>
			</div>
			
			<div className={styles.image1}>
				<img src={Image3} alt="" />
			</div>
			

		</div>
  )
}

export default Content2
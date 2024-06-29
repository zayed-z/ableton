import React from 'react'
import styles from './Content4.module.css'
import Img from '../../assets/photo7.jpg'
import Img1 from '../../assets/photo8.jpg'

function Content4() {
	return (
		<div className={styles.Container}>

			<div className={styles.lavContainer}>
				<div className={styles.imgContainer}>
					<img src={Img} alt="" />
					<img src={Img1} alt="" />
				</div>
			</div>

		</div>
	)
}

export default Content4
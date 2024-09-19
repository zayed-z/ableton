import React from 'react'
import styles from './Content4.module.css'
import Img from '../../assets/photo7.jpg'
import Img1 from '../../assets/photo8.jpg'

function Content4() {
	return (
		<div className={styles.Container}>

			<div className={styles.lavContainer}>
				<img className='img1' src={Img} alt="" />
				<img className='img2' src={Img1} alt="" />
			</div>

		</div>

		
	)
}

export default Content4
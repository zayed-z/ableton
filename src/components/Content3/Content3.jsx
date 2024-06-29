import React from 'react'
import styles from './Content3.module.css'
import Img from '../../assets/photo6.jpg'

function Content3() {
  return (
	<div className={styles.Container}>
		<div className={styles.imgContainer}>
			<img src={Img} alt="" />
		</div>
	</div>
  )
}

export default Content3
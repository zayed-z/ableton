import React from 'react'
import styles from './JobTeaser.module.css'
import Img from '../../assets/photo9.jpg'

function JobTeaser() {
	return (
		<div className={styles.teaserContainer}>
			<div className={styles.imgText}>
				<img src={Img} alt="" />
				<div className={styles.jobCont}>

						<p>
							We're really proud of the work we've done so far.
							But there's so much more to come. If you'd like to be a part of it,
							please join us.
						</p>
						<a href="#" target='_blank'>
							<p className={styles.hasArrow}>
								See latest jobs 
							</p>
						</a>


				</div>

			</div>

		</div>
	)
}

export default JobTeaser
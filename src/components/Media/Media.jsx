import React from 'react'
import styles from './Media.module.css'

function Media() {
  return (
	<div className={styles.Media}>
		<figure className={styles.Figure}>
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9SbnhgjeyXA?si=bN7MiT3-ZSH8E3VN" 
			title="YouTube video player" 
			frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			referrerpolicy="strict-origin-when-cross-origin" 
			allowfullscreen>
			</iframe>

			<figcaption className={styles.FigCaption}>Why Ableton - Juanpe Bolivar</figcaption>
		</figure>

	</div>
  )
}

export default Media
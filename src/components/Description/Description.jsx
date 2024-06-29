import React from 'react'
import styles from './Description.module.css';
import PropTypes from 'prop-types';

function Description(props) {
  return (
	<div className={styles.Description}>
		<p className={styles.bigger} dangerouslySetInnerHTML={{ __html: props.bigger }}>
		</p>
		<p className={styles.smaller} dangerouslySetInnerHTML={{ __html: props.smaller}}>
		</p>
	</div>
  )
}
Description.propTypes ={
	bigger: PropTypes.string,
	smaller: PropTypes.string,
}
Description.defaultProps = {
	bigger: 'Ableton',
	smaller: 'Ableton',
}
export default Description
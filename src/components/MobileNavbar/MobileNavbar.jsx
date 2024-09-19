import React from 'react'
import styles from './MobileNavbar.module.css'
import logo from "./../../assets/ableton_logo.jpg";


function MobileNavbar() {

	const showMobileNav = () => {
		let menuitem = document.querySelector(`.${styles.mobileMenuitem}`)
		if (window.getComputedStyle(menuitem).display === 'none') {
			menuitem.style.display = 'block';
		} else {
			menuitem.style.display = 'none';
		}
	}

	return (
		<>
			<div className={styles.navbarContainer}>
				<div className={styles.navbarLogo}>
					<a href="/">
						<img src={logo} alt="Ableton Logo" />
					</a>
				</div>
				<button onClick={showMobileNav}>
					<span className={styles.mobileMenu}>
						Menu
					</span>

					<div className={styles.mobileMenuarw} ></div>

				</button>

			</div>
			<div className={styles.mobileMenuitem}>
				<ul className={styles.navItems}>
					<li><a href="#">Live</a></li>
					<li><a href="#">Push</a></li>
					<li><a href="#">Note</a></li>
					<li><a href="#">Link</a></li>
					<li><a href="#">Shop</a></li>
					<li><a href="#">Packs</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#" className={styles.moreItem}>More </a>+</li>
					<li><a href="#" className={styles.moreItem}>Try Live 12 for free</a></li>
					<li><a href="#">Log in or Register</a></li>
				</ul>

			</div>
		</>
	)
}

export default MobileNavbar
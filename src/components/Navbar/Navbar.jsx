import React from "react";
import logo from "./../../assets/ableton_logo.jpg";
import styles from "./Navbar.module.css";

function Navbar() {


	function twoo() {
		
	}

	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navLogoLeft}>
				<div className={styles.navbarLogo}>
					<a href="/">
						<img src={logo} alt="Ableton Logo" />
					</a>
				</div>

				<div className={styles.navbarLeft}>
					<ul className={styles.navItemsL}>
						<li>
							<a href="#">Live</a>
						</li>
						<li>
							<a href="#">Push</a>
						</li>
						<li>
							<a href="#">Note</a>
						</li>
						<li>
							<a href="#">Link</a>
						</li>
						<li>
							<a href="#">Shop</a>
						</li>
						<li>
							<a href="#">Packs</a>
						</li>
						<li>
							<a href="#">Help</a>
						</li>
						<li>
							<a href="#" className={styles.moreItem}>
								More
							</a>
							+
						</li>
					</ul>
				</div>
			</div>

			<div className={styles.navbarRight}>
				<ul className={styles.navItemsR}>
					<li>
						<a href="#" className={styles.moreItem}>
							Try Live 12 for free
						</a>
					</li>
					<li>
						<a href="#">Log in or Register</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;

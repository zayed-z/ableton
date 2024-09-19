import React from 'react'
import styles from './Footer.module.css'
import img from './../../assets/abletonFooter.svg'
import imgFb from '../../assets/facebook.svg'
import imgX from '../../assets/xtwitter.svg'
import imgYt from '../../assets/youtube.svg'
import imgIg from '../../assets/instagram.png'
import imgTk from '../../assets/tiktok.png'
import imgLogo from '../../assets/ableton_logo.jpg'


function Footer() {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.mainFooter}>
				<div className={styles.footerTitle}>
					<img src={img} alt="Ableton" />
				</div>
				<div className={styles.footerCont}>
					<div className={styles.firstRow}>
						<div className={styles.firstRowcol1}>
							<ul className={styles.about}>
								<li className={styles.abtList}><a href='#' target='_blank'>Register Live or Push</a></li>
								<li className={styles.abtList}><a href='#' target='_blank'>About Ableton</a></li>
								<li className={styles.abtList}><a href='#' target='_blank'>Jobs</a></li>
							</ul>
							<ul className={styles.socialMedia}>
								<li className={styles.socialMedList}><a href='#' target='_blank'><img src={imgFb} alt="Facebook" /></a></li>
								<li className={styles.socialMedList}><a href='#' target='_blank'><img src={imgX} alt="X" /></a></li>
								<li className={styles.socialMedList}><a href='#' target='_blank'><img src={imgYt} alt="Youtube" /></a></li>
								<li className={styles.socialMedList}><a href='#' target='_blank'><img src={imgIg} alt="Instagram" /></a></li>
								<li className={styles.socialMedList}><a href='#' target='_blank'><img src={imgTk} alt="Tiktok" /></a></li>
							</ul>
						</div>
						<div className={styles.firstRowcol2}>
							<ul className={styles.Education}>
<<<<<<< HEAD
								<li style={{ fontWeight: '600' }}><a href='#' target='_blank'>Education</a></li>
=======
								<li style={{ fontWeight: '600' }}>Education</li>
>>>>>>> main
								<li className={styles.eduList}><a href='#' target='_blank'>Offers for students and teachers</a></li>
								<li className={styles.eduList}><a href='#' target='_blank'>Ableton for the classroom</a></li>
								<li className={styles.eduList}><a href='#' target='_blank'>Ableton for colleges and Universities</a></li>
							</ul>
						</div>
						<div className={styles.firstRowcol3}>
							<ul className={styles.Education}>
<<<<<<< HEAD
								<li style={{ fontWeight: '600' }}><a href='#' target='_blank'>Community</a></li>
=======
								<li style={{ fontWeight: '600' }}>Community</li>
>>>>>>> main
								<li className={styles.eduList}><a href='#' target='_blank'>Find Ableton User Groups</a></li>
								<li className={styles.eduList}><a href='#' target='_blank'>Find Certified Training</a></li>
								<li className={styles.eduList}><a href='#' target='_blank'>Become a Certified Trainer</a></li>
							</ul>
						</div>
						<div className={styles.firstRowcol4}>
							<div className={styles.LL}>
								<text style={{ fontWeight: '600' }}>Language & Location</text>
								<div className={styles.dropDowns}>
									<select className={styles.langDrop}>
										<option value="en" selected>English</option>
										<option value="de">Deutsch</option>
										<option value="fr">Français</option>
										<option value="ja">日本語</option>
										<option value="zh-cn">简体中文</option>
										<option value="es">Español</option>
									</select>
									<select className={styles.CountryDrop}>
										<optgroup label='Common Countries'>
											<option value="">United States</option>
											<option value="">United Kingdom</option>
											<option value="">France</option>
											<option value="">Germany</option>
											<option value="">Canada</option>
											<option value="">Japan</option>
											<option value="">Australia</option>
										</optgroup>
										<optgroup label='Other Countries/Regions'>
											<option value="">Afghanistan</option>
											<option value="">Albania</option>
											<option value="">Algeria</option>
											<option value="">Andorra</option>
											<option value="">Angola</option>
											<option value="">Antigua and Barbuda</option>
											<option value="">Antarctica</option>
											<option value="">Argentina</option>
											<option value="">Armenia</option>
											<option value="">Aruba</option>
											<option value="">Australia</option>
											<option value="">Austria</option>
											<option value="">Azerbaijan</option>
											<option value="">Bahamas</option>
											<option value="">Bahrain</option>
											<option value="" selected>Bangladesh</option>
											<option value="">Barbados</option>
											<option value="">Belarus</option>
											<option value="">Belgium</option>
											<option value="">Belize</option>
											<option value="">Benin</option>
											<option value="">Bermuda</option>
											<option value="">Bolivia</option>
											<option value="">Bosnia and Herzegovina</option>
											<option value="">Botswana</option>
											<option value="">Brazil</option>
											<option value="">British Indian Ocean Territory</option>
											<option value="">Brunei Darussalam</option>
											<option value="">Burkina Faso</option>
											<option value="">Burundi</option>
											<option value="">Cabo Verde</option>
											<option value="">Cambodia</option>
											<option value="">Cameroon</option>
											<option value="">Central African Republic</option>
											<option value="">Chad</option>
											<option value="">Chile</option>
											<option value="">China</option>
											<option value="">Colombia</option>
											<option value="">Comoros</option>
											<option value="">Congo</option>
										</optgroup>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.secondRow}>
						<text>Sign up to our newsletter</text>
						<p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
						<div className={styles.InputField}>
							<input type="text" placeholder='Email Address' />
							<button>Sign Up</button>
						</div>
					</div>
				</div>
				<div className={styles.thirdRow}>
					<div className={styles.listLeft}>
						<ul className={styles.listLeftUl}>
							<li className={styles.listLeftItm}><a href="#">Contact Us</a></li>
							<li className={styles.listLeftItm}><a href="#">Press Resources</a></li>
							<li className={styles.listLeftItm}><a href="#">Legal Info</a></li>
							<li className={styles.listLeftItm}><a href="#">Privacy Policy</a></li>
							<li className={styles.listLeftItm}><a href="#">Cookie Settings</a></li>
							<li className={styles.listLeftItm}><a href="#">Imprint</a></li>
						</ul>
					</div>
					<div className={styles.listRight}>
						<p >Made In Berlin</p>
						<div>
							<img src={imgLogo} alt="Ableton Logo" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
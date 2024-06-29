import React from "react";
import styles from "./Menubar.module.css";

function Menubar() {
    return (
        <div className={styles.menubarContainer}>
            <div className={styles.menuList}>
                <li className={styles.menuItems}>
                    <a href="#" className={styles.aboutItem}>
                        About
                    </a>
                </li>
                <li className={styles.menuItems}>
                    <a href="#">Jobs</a>
                </li>
                <li className={styles.menuItems}>
                    <a href="#">Apprenticeships</a>
                </li>
            </div>
        </div>
    );
}

export default Menubar;

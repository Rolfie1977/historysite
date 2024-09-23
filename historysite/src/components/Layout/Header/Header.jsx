// src/components/Layout/Header/Header.jsx
import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import styles from "./Header.module.scss";
import headerImage from "../../../assets/header-image.jpg"; // Importer det lokale billede

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<header
			className={styles.header}
			style={{ backgroundImage: `url(${headerImage})` }}
		>
			<div className={styles.overlay}>
				<h1>Historiske Begivenheder</h1>
				<nav>
					<a href="/">Today</a>
					<a href="/by-date">By Date</a>
					<a href="/since">Since</a>
				</nav>
				<button onClick={toggleTheme}>
					Skift til {theme === "light" ? "Mørkt" : "Lyst"} Tema
				</button>
			</div>
		</header>
	);
};

export default Header;

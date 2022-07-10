import { useState, type FC } from "react";

import styles from "./Welcome.module.css";

import HERO_BANNER from "../../assets/images/bg_landing.jpeg";
import { ReactComponent as NETFLIX_LOGO } from "../../assets/svg/netflix-2.svg";
import { NavLink } from "react-router-dom";

const Welcome: FC = () => {
	const [email, setEmail] = useState("");

	return (
		<div className={`${styles.welcome}`}>
			<header className={`${styles.welcome_header}`}>
				<div className={`${styles.logo}`}>
					<NETFLIX_LOGO />
				</div>
				<div className={`${styles.welcome_header_cta_btn}`}>
					<NavLink to="/sign_in">
						<button className={`${styles.welcome_hero_cta_btn} ${styles.welcome_header_btn}`}>
							Sign In
						</button>
					</NavLink>
				</div>
			</header>
			<div className={`${styles.welcome_hero}`}>
				<img
					className={`${styles.welcome_hero_img}`}
					src={HERO_BANNER}
					alt="hero banner"
				/>
				<div className={`${styles.welcome_hero_content}`}>
					<h1>Unlimited movies, TV shows and more.</h1>
					<h2>Watch anywhere. Cancel anytime.</h2>
					<p>Ready to watch? Enter your email to create or restart your membership.</p>
					<div className={`${styles.welcome_hero_cta}`}>
						<input
							className={`${styles.welcome_hero_cta_input}`}
							type="email"
							placeholder="Email address"
							required={true}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button className={`${styles.welcome_hero_cta_btn}`}>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;

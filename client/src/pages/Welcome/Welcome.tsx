import { type FC } from "react";

import styles from "./Welcome.module.css";

import HERO_BANNER from "../../assets/images/bg_landing.jpeg";

const Welcome: FC = () => {
	return (
		<div className={`${styles.welcome}`}>
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
						/>
						<button className={`${styles.welcome_hero_cta_btn}`}>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;

import { type FC } from "react";
import styles from "./Loader.module.css";

import { ReactComponent as NETFLIX_LOADER } from "../../assets/svg/netflix.svg";

const Loader: FC = () => {
	return (
		<div className={`${styles.loader_container}`}>
			<NETFLIX_LOADER className={`${styles.loader}`} />
		</div>
	);
};

export default Loader;

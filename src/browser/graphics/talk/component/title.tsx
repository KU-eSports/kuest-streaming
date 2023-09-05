import type { FunctionComponent } from "react";

import styles from "../css/title.module.css";

import logo from "../image/KUeST_logo_alpha.png";

const title = nodecg.bundleConfig.title;

const Component: FunctionComponent = () => {
	return (
		<div className={styles["wrapper"]}>
			<div className={styles["display"]}>
				<img className={styles["logo"]} src={logo} />
				<div className={styles["title"]}>{title}</div>
			</div>
		</div>
	);
};

export default Component;

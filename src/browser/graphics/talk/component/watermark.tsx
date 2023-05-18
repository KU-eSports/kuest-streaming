import type { FunctionComponent } from "react";

import styles from "../css/watermark.module.css";

import watermark from "../image/logo/KUeST_logo_mono_alpha.png";

const Component: FunctionComponent = () => {
	return (
		<div className={styles.watermark}>
			<img className={styles.left} src={watermark} />
			<img className={styles.right} src={watermark} />
		</div>
	);
};

export default Component;

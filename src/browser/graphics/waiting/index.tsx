import type { FunctionComponent } from "react";

import Background from "./component/background";
import Stickers from "./component/stickers";
import Timer from "./component/timer";
import Splats from "./component/splats";
import Telop from "./component/telop";

import "../../common/css/splatnet.css";
import styles from "./css/style.module.css";

const Component: FunctionComponent = () => {
	return (
		<div className={styles["wrapper"]}>
			<div className={styles["background"]}>
				<Background />
			</div>
			<div className={styles["stickers"]}>
				<Stickers />
			</div>
			<div className={styles["timer"]}>
				<Timer />
			</div>
			<div className={styles["splats"]}>
				<Splats />
			</div>
			<div className={styles["telop"]}>
				<Telop />
			</div>
		</div>
	);
};

export default Component;

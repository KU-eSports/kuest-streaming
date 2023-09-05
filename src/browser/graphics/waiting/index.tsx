import type { FunctionComponent } from "react";

import Agent from "./component/agent";
import Timer from "./component/timer";
import Telop from "./component/telop";

import styles from "./css/style.module.css";

const Component: FunctionComponent = () => {
	return (
		<div className={styles["container"]}>
			<div className={styles["agent"]}>
				<Agent />
			</div>
			<div className={styles["timer"]}>
				<Timer />
			</div>
			<div className={styles["telop"]}>
				<Telop />
			</div>
		</div>
	);
};

export default Component;

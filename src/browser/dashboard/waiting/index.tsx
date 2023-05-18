import type { FunctionComponent } from "react";

import { useState } from "react";

import Title from "./component/title";
import Timer from "./component/timer";
import Message from "./component/message";
import Submit from "./component/submit";

import "modern-normalize";
import styles from "./css/style.module.css";

const Component: FunctionComponent = () => {
	const [waiting, setWaiting] = useState({
		title: nodecg.bundleConfig.title ?? "",
	});

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<Title setWaiting={setWaiting} />
			</div>
			<div className={styles.timer}>
				<Timer setWaiting={setWaiting} />
			</div>
			<div className={styles.message}>
				<Message setWaiting={setWaiting} />
			</div>
			<div className={styles.submit}>
				<Submit waiting={waiting} />
			</div>
		</div>
	);
};

export default Component;

import type { FunctionComponent } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/banner.module.css";

const getLongStr = (str: string, length: number) => {
	return `　　　　　${str}`.repeat(length);
};

const Component: FunctionComponent = () => {
	const waiting = useReplicant("waiting");
	const title = (waiting?.title || nodecg.bundleConfig.title) ?? "";
	const marquee = getLongStr(title, Math.ceil(10 / (title.length || 1)) * 2);

	return (
		<div className={styles["wrapper"]}>
			<div className={styles["showcase"]}>
				<div className={styles["marquee"]}>{marquee}</div>
			</div>
		</div>
	);
};

export default Component;

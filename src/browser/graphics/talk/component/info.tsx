import type { FunctionComponent } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/info.module.css";

import arrow from "../image/arrow.svg";

const Component: FunctionComponent = () => {
	const map = useReplicant("splatoon3Map");

	return (
		<div key={map?.name} className={styles["wrapper"]}>
			{map && (
				<div className={styles["display"]}>
					<div className={styles["next"]}>Next Map</div>
					<img className={styles["arrow"]} src={arrow} />
					<div className={styles["name"]}>{map.name}</div>
					<img className={styles["image"]} src={map.image} />
				</div>
			)}
		</div>
	);
};

export default Component;

import type { MapDto } from "../../../../@types/valorant";
import type { FunctionComponent } from "react";

import styles from "../css/display.module.css";

type Props = {
	map: MapDto | undefined;
};
const Component: FunctionComponent<Props> = (props) => {
	const map = props.map;

	return (
		<div className={styles["display"]}>
			{map?.splash ? (
				<img src={map?.splash} />
			) : (
				<div className={styles["holder"]}>未選択</div>
			)}
		</div>
	);
};

export default Component;

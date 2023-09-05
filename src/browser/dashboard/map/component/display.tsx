import type { FunctionComponent } from "react";

import styles from "../css/display.module.css";

type Props = {
	map?: {
		name: string;
		image: string;
	};
};
const Component: FunctionComponent<Props> = (props) => {
	const map = props.map;

	return (
		<div className={styles["display"]}>
			{map?.image ? (
				<img src={map?.image} />
			) : (
				<div className={styles["holder"]}>未選択</div>
			)}
		</div>
	);
};

export default Component;

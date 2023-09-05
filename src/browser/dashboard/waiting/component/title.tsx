import type { FunctionComponent } from "react";

import styles from "../css/title.module.css";

type Props = {
	setWaiting: Function;
};
const Component: FunctionComponent<Props> = (props) => {
	const setTitle = (title: string) => {
		props.setWaiting((pre: object) => {
			return {
				...pre,
				title,
			};
		});
	};
	const defaultTitle = nodecg.bundleConfig.title ?? "";

	return (
		<div className={styles["title"]}>
			<input
				defaultValue={defaultTitle}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</div>
	);
};

export default Component;

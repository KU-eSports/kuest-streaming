import type { FunctionComponent } from "react";

import styles from "../css/message.module.css";

type Props = {
	setWaiting: Function;
};
const Component: FunctionComponent<Props> = (props) => {
	const setMessage = (message: string) => {
		props.setWaiting((pre: object) => {
			return {
				...pre,
				message,
			};
		});
	};

	return (
		<div className={styles["message"]}>
			<input onChange={(e) => setMessage(e.target.value)} />
		</div>
	);
};

export default Component;

import type { FunctionComponent } from "react";

import type { Speakers } from "../../../../nodecg/generated";

import styles from "../css/voice.module.css";

type Props = {
	speaker: Speakers[number];
	avatar: string;
};
const Component: FunctionComponent<Props> = (props) => {
	const { speaker, avatar } = props;
	const { speaking, user, nick } = speaker;

	return (
		<div className={styles["wrapper"]}>
			<div className={styles["icon"]}>
				<img
					className={`${styles["icon"]} ${
						speaking ? styles["speaking"] : styles["unspeaking"]
					}`}
					src={avatar}
					onError={(e) => {
						e.currentTarget.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
					}}
				/>
			</div>
			<div className={styles["name"]}>{nick}</div>
		</div>
	);
};

export default Component;

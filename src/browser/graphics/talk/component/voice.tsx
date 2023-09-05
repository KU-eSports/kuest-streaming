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
			<img
				className={`${styles["icon"]} ${
					speaking ? styles["speaking"] : styles["unspeaking"]
				}`}
				src={avatar}
				onError={(e) => {
					e.currentTarget.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
				}}
			/>
			<div className={styles["container"]}>
				<div className={styles["box"]}></div>
				<div className={styles["name"]}>{speaker.nick}</div>
			</div>
		</div>
	);
};

export default Component;

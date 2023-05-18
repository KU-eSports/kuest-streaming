import type { FunctionComponent } from "react";

import styles from "../css/voice.module.css";

import naka from "../image/voice/N4K4.png";
import kashipan from "../image/voice/kashipan.png";
const talker: { [key: string]: string | undefined } = {
	"402750037739831298": naka,
	"951723232527011840": kashipan,
};

type Props = {
	speaker: Speaker;
};
const Component: FunctionComponent<Props> = (props) => {
	const speaker = props.speaker;
	const id = speaker.user.id;
	// const avatar = speaker.user.avatar
	// 	? `https://cdn.discordapp.com/avatars/${speaker.user.id}/${speaker.user.avatar}.jpg`
	// 	: `https://cdn.discordapp.com/embed/avatars/${
	// 			Number(speaker.user.discriminator) % 6
	// 	  }.png`;

	return (
		<div className={styles.wrapper}>
			<div className={styles.icon}>
				<img
					className={`${styles.icon} ${
						speaker.speaking ? styles.speaking : styles.unspeaking
					}`}
					src={talker[id]}
				/>
			</div>
			<div className={styles.name}>{speaker.nick}</div>
		</div>
	);
};

export default Component;

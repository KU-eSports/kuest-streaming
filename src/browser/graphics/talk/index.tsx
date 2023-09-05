import type { FunctionComponent } from "react";

import { useReplicant } from "../../use-replicant";

import Background from "./component/background";
import Frame from "./component/frame";
import Voice from "./component/voice";

import "../../common/css/splatnet.css";
import styles from "./css/style.module.css";

const talkers = nodecg.bundleConfig.discord.speakers;

const Component: FunctionComponent = () => {
	const speakers = useReplicant("speakers") ?? [];

	return (
		<div className={styles["container"]}>
			<div className={styles["background"]}>
				<Background />
			</div>
			<div className={styles["voice"]}>
				{speakers.reduce((acc, speaker) => {
					const avatar = talkers[speaker.user.id];
					if (avatar) {
						acc.push(
							<Voice key={speaker.user.id} speaker={speaker} avatar={avatar} />,
						);
					}
					return acc;
				}, [] as JSX.Element[])}
			</div>
			<div className={styles["frame"]}>
				<Frame />
			</div>
		</div>
	);
};

export default Component;

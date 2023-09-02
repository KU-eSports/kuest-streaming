import type { FunctionComponent } from "react";

import { useReplicant } from "../../use-replicant";

import Watermark from "./component/watermark";
import Banner from "./component/banner";
import Voice from "./component/voice";
import Footer from "./component/footer";

import styles from "./css/style.module.css";

const talkers = nodecg.bundleConfig.discord.speakers;

const Component: FunctionComponent = () => {
	const speakers = useReplicant("speakers") ?? [];

	return (
		<div className={styles["container"]}>
			<Watermark />
			<div className={styles["header"]}>
				<Banner />
			</div>
			<div className={styles["voices"]}>
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
			<div className={styles["footer"]}>
				<Footer />
			</div>
		</div>
	);
};

export default Component;

import type { FunctionComponent } from "react";

import { useReplicant } from "../../use-replicant";

import Watermark from "./component/watermark";
import Banner from "./component/banner";
import Voice from "./component/voice";
import Footer from "./component/footer";

import "modern-normalize";
import styles from "./css/style.module.css";

const allow = nodecg.bundleConfig.discord?.allow ?? [];

const Component: FunctionComponent = () => {
	const speakers = useReplicant("speaking") ?? [];

	return (
		<div className={styles.container}>
			<Watermark />
			<div className={styles.header}>
				<Banner />
			</div>
			<div className={styles.voices}>
				{speakers
					.filter((s) => allow.includes(s.user.id))
					.map((speaker) => {
						return <Voice key={speaker.user.id} speaker={speaker} />;
					})}
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
};

export default Component;

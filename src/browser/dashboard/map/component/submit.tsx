import type { MapDto } from "@/types/valorant";
import type { FunctionComponent } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/submit.module.css";

const valorantMapRep = nodecg.Replicant("valorantMap");

type Props = {
	map: MapDto | undefined;
};
const Component: FunctionComponent<Props> = (props) => {
	const map = props.map;
	const current = useReplicant("valorantMap");

	return (
		<div className={styles.submit}>
			<button
				disabled={map?.uuid === current?.uuid}
				onClick={() => (valorantMapRep.value = map)}
			>
				送信
			</button>
		</div>
	);
};

export default Component;

import type { FunctionComponent } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/telop.module.css";

const Component: FunctionComponent = () => {
  const waiting = useReplicant("waiting");
  const message = waiting?.message ?? "";

  return (
    <div className={styles.wrapper}>
      {/* メッセージの文字数制限: 全角8文字まで可能 */}
      <div className={styles.editable}>{message}</div>
    </div>
  );
};

export default Component;

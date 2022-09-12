import { useEffect, useState } from "react";
import clone from "lodash-es/clone";
import { ReplicantMap } from "../nodecg/replicants";

/**
 * Subscribe to a replicant
 * @param replicantName Replicant name to subscribe to
 */
export const useReplicant = <TRepName extends keyof ReplicantMap>(
  replicantName: TRepName
) => {
  const replicant = nodecg.Replicant(replicantName);
  const [value, updateValue] = useState<ReplicantMap[TRepName] | null>(null);

  useEffect(() => {
    const changeHandler = (newValue: ReplicantMap[TRepName]): void => {
      updateValue((oldValue) => {
        if (newValue !== oldValue) {
          return newValue;
        }
        return clone(newValue);
      });
    };
    replicant.on("change", changeHandler);
    return () => {
      replicant.removeListener("change", changeHandler);
    };
  }, [replicant]);

  return value;
};

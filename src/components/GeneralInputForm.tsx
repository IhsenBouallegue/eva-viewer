import { NumberInput } from "@mantine/core";
import { useEvaViewerContext } from "../EvaViewerContext";

import type { BodyParameters } from "../types/Types";

export function GeneralInputForm() {
  const { setParameters, alpha } = useEvaViewerContext();
  return (
    <NumberInput
      defaultValue={20}
      placeholder="Alpha"
      label="Alpha"
      value={alpha}
      onChange={(val: number) => {
        setParameters({ alpha: val });
      }}
    />
  );
}
export default GeneralInputForm;

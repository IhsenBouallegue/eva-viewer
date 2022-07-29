import { NumberInput } from "@mantine/core";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function GeneralInputForm() {
  const { setParameters, alpha } = useEvaViewerContext();
  return (
    <NumberInput
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

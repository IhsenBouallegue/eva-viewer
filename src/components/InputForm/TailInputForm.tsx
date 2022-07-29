import { NumberInput } from "@mantine/core";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function TailInputForm() {
  const { setParameters, tailHeight, tailWidth, tailLength } =
    useEvaViewerContext();
  return (
    <>
      <NumberInput
        placeholder="tailHeight"
        label="tailHeight"
        value={tailHeight}
        onChange={(val: number) => {
          setParameters({ tailHeight: val });
        }}
      />
      <NumberInput
        placeholder="tailWidth"
        label="tailWidth"
        value={tailWidth}
        onChange={(val: number) => {
          setParameters({ tailWidth: val });
        }}
      />
      <NumberInput
        placeholder="tailLength"
        label="tailLength"
        value={tailLength}
        onChange={(val: number) => {
          setParameters({ tailLength: val });
        }}
      />
    </>
  );
}
export default TailInputForm;

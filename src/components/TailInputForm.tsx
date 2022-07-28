import { NumberInput } from "@mantine/core";
import { useEvaViewerContext } from "../EvaViewerContext";

import type { TailParameters } from "../types/Types";

export function TailInputForm() {
  const { setParameters, tailHeight, tailWidth, tailLength } =
    useEvaViewerContext();
  return (
    <>
      <NumberInput
        defaultValue={45}
        placeholder="tailHeight"
        label="tailHeight"
        value={tailHeight}
        onChange={(val: number) => {
          setParameters({ tailHeight: val });
        }}
      />
      <NumberInput
        defaultValue={45}
        placeholder="tailWidth"
        label="tailWidth"
        value={tailWidth}
        onChange={(val: number) => {
          setParameters({ tailWidth: val });
        }}
      />
      <NumberInput
        defaultValue={45}
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

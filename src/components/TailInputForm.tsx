import { NumberInput } from "@mantine/core";

import type { TailParameters } from "../types/Types";

export function TailInputForm({
  setTailParameters,
  ...tailParameters
}: { setTailParameters: (val: TailParameters) => void } & TailParameters) {
  return (
    <>
      <NumberInput
        defaultValue={45}
        placeholder="tailHeight"
        label="tailHeight"
        value={tailParameters.tailHeight}
        onChange={(val: number) => {
          setTailParameters({ ...tailParameters, tailHeight: val });
        }}
      />
      <NumberInput
        defaultValue={45}
        placeholder="tailWidth"
        label="tailWidth"
        value={tailParameters.tailWidth}
        onChange={(val: number) => {
          setTailParameters({ ...tailParameters, tailWidth: val });
        }}
      />
      <NumberInput
        defaultValue={45}
        placeholder="tailLength"
        label="tailLength"
        value={tailParameters.tailLength}
        onChange={(val: number) => {
          setTailParameters({ ...tailParameters, tailLength: val });
        }}
      />
    </>
  );
}
export default TailInputForm;

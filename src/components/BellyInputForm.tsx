import { NumberInput } from "@mantine/core";

import type { BodyParameters } from "../types/Types";

export function BellyInputForm({
  setBodyParameters,
  ...bodyParameters
}: { setBodyParameters: (val: BodyParameters) => void } & BodyParameters) {
  return (
    <>
      <NumberInput
        defaultValue={20}
        placeholder="Alpha"
        label="Alpha"
        value={bodyParameters.alpha}
        onChange={(val: number) => {
          setBodyParameters({ ...bodyParameters, alpha: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Width"
        label="Width"
        value={bodyParameters.width}
        onChange={(val: number) => {
          setBodyParameters({ ...bodyParameters, width: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Total Length"
        label="Total Length"
        value={bodyParameters.totalLength}
        onChange={(val: number) => {
          setBodyParameters({ ...bodyParameters, totalLength: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Body Height"
        label="Body Height"
        value={bodyParameters.bodyHeight}
        onChange={(val: number) => {
          setBodyParameters({ ...bodyParameters, bodyHeight: val });
        }}
      />
    </>
  );
}
export default BellyInputForm;

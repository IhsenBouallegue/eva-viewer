import { NumberInput } from "@mantine/core";

import type { BodyParameters } from "../types/Types";

export function HeadInputForm({
  setBodyParameters,
  ...bodyParameters
}: { setBodyParameters: any } & BodyParameters) {
  return (
    <>
      <NumberInput
        defaultValue={45}
        placeholder="Sigma"
        label="Sigma"
        value={bodyParameters.sigma}
        onChange={(val: number) => {
          setBodyParameters({ ...bodyParameters, sigma: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Height"
        label="Height"
        value={bodyParameters.height}
        onChange={(val: number) => {
          setBodyParameters({ ...bodyParameters, height: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Slant Length"
        label="Slant Length"
        value={bodyParameters.slantLength}
        onChange={(val: number) => {
          setBodyParameters({ ...bodyParameters, slantLength: val });
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
        placeholder="Alpha"
        label="Alpha"
        value={bodyParameters.alpha}
        onChange={(val: number) => {
          setBodyParameters({ ...bodyParameters, alpha: val });
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
export default HeadInputForm;

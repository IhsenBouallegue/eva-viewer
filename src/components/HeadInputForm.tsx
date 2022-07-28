import { NumberInput } from "@mantine/core";
import { useEvaViewerContext } from "../EvaViewerContext";

import type { BodyParameters } from "../types/Types";

export function HeadInputForm() {
  const { setParameters, sigma, width, height, slantLength, totalLength } =
    useEvaViewerContext();
  return (
    <>
      <NumberInput
        defaultValue={45}
        placeholder="Sigma"
        label="Sigma"
        value={sigma}
        onChange={(val: number) => {
          setParameters({ sigma: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Width"
        label="Width"
        value={width}
        onChange={(val: number) => {
          setParameters({ width: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Height"
        label="Height"
        value={height}
        onChange={(val: number) => {
          setParameters({ height: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Slant Length"
        label="Slant Length"
        value={slantLength}
        onChange={(val: number) => {
          setParameters({ slantLength: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Total Length"
        label="Total Length"
        value={totalLength}
        onChange={(val: number) => {
          setParameters({ totalLength: val });
        }}
      />
    </>
  );
}
export default HeadInputForm;

import { NumberInput } from "@mantine/core";
import { useEvaViewerContext } from "../EvaViewerContext";

import type { BodyParameters } from "../types/Types";

export function BellyInputForm() {
  const { setParameters, alpha, width, totalLength, bodyHeight } =
    useEvaViewerContext();
  return (
    <>
      <NumberInput
        defaultValue={20}
        placeholder="Alpha"
        label="Alpha"
        value={alpha}
        onChange={(val: number) => {
          setParameters({ alpha: val });
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
        placeholder="Total Length"
        label="Total Length"
        value={totalLength}
        onChange={(val: number) => {
          setParameters({ totalLength: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Body Height"
        label="Body Height"
        value={bodyHeight}
        onChange={(val: number) => {
          setParameters({ bodyHeight: val });
        }}
      />
    </>
  );
}
export default BellyInputForm;

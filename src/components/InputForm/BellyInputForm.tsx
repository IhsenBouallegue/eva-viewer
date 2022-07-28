import { NumberInput } from "@mantine/core";
import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function BellyInputForm() {
  const { setParameters, alpha, width, totalLength, bodyHeight } =
    useEvaViewerContext();
  return (
    <>
      <NumberInput
        placeholder="Alpha"
        label="Alpha"
        value={alpha}
        onChange={(val: number) => {
          setParameters({ alpha: val });
        }}
      />
      <NumberInput
        placeholder="Width"
        label="Width"
        value={width}
        onChange={(val: number) => {
          setParameters({ width: val });
        }}
      />
      <NumberInput
        placeholder="Total Length"
        label="Total Length"
        value={totalLength}
        onChange={(val: number) => {
          setParameters({ totalLength: val });
        }}
      />
      <NumberInput
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

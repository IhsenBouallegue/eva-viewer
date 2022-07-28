import { NumberInput } from "@mantine/core";
import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function HeadInputForm() {
  const { setParameters, sigma, width, height, slantLength, totalLength } =
    useEvaViewerContext();
  return (
    <>
      <NumberInput
        placeholder="Sigma"
        label="Sigma"
        value={sigma}
        onChange={(val: number) => {
          setParameters({ sigma: val });
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
        placeholder="Height"
        label="Height"
        value={height}
        onChange={(val: number) => {
          setParameters({ height: val });
        }}
      />
      <NumberInput
        placeholder="Slant Length"
        label="Slant Length"
        value={slantLength}
        onChange={(val: number) => {
          setParameters({ slantLength: val });
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
    </>
  );
}
export default HeadInputForm;

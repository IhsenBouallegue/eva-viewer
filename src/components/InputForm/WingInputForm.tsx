import { NumberInput } from "@mantine/core";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function WingInputForm() {
  const { setParameters, wingLengthScale, wingHeightScale, wingSpan } =
    useEvaViewerContext();
  return (
    <>
      <NumberInput
        placeholder="Wing Length Scale"
        label="Wing Length Scale"
        value={wingLengthScale}
        onChange={(val: number) => {
          setParameters({ wingLengthScale: val });
        }}
      />
      <NumberInput
        placeholder="Wing Height Scale"
        label="Wing Height Scale"
        value={wingHeightScale}
        onChange={(val: number) => {
          setParameters({ wingHeightScale: val });
        }}
      />
      <NumberInput
        placeholder="Wing Span"
        label="Wing Span"
        value={wingSpan}
        onChange={(val: number) => {
          setParameters({ wingSpan: val });
        }}
      />
    </>
  );
}
export default WingInputForm;

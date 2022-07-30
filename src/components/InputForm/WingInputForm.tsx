import { InputWrapper, Slider } from "@mantine/core";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function WingInputForm() {
  const { setParameters, wingLength, wingHeight, wingSpan, height } =
    useEvaViewerContext();
  return (
    <>
      <InputWrapper label="Wing Length">
        <Slider
          min={100}
          max={200}
          value={wingLength}
          onChange={(val: number) => {
            setParameters({ wingLength: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Wing Height">
        <Slider
          min={10}
          max={height - 1}
          value={wingHeight}
          onChange={(val: number) => {
            setParameters({ wingHeight: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Wing Span">
        <Slider
          min={500}
          max={1000}
          value={wingSpan}
          onChange={(val: number) => {
            setParameters({ wingSpan: val });
          }}
        />
      </InputWrapper>
    </>
  );
}
export default WingInputForm;

import { InputWrapper, Slider } from "@mantine/core";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function TailInputForm() {
  const {
    setParameters,
    tailHeight,
    tailWidth,
    tailLength,
    width,
    bodyHeight,
  } = useEvaViewerContext();
  return (
    <>
      <InputWrapper label="Tail Height">
        <Slider
          min={10}
          max={bodyHeight}
          value={tailHeight}
          onChange={(val: number) => {
            setParameters({ tailHeight: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Tail Width">
        <Slider
          min={10}
          max={width}
          value={tailWidth}
          onChange={(val: number) => {
            setParameters({ tailWidth: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Tail Length">
        <Slider
          min={10}
          max={500}
          value={tailLength}
          onChange={(val: number) => {
            setParameters({ tailLength: val });
          }}
        />
      </InputWrapper>
    </>
  );
}
export default TailInputForm;

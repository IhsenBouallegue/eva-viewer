import { Input, Slider } from "@mantine/core";

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
      <Input.Wrapper label="Tail Height">
        <Slider
          min={10}
          max={bodyHeight}
          value={tailHeight}
          onChange={(val: number) => {
            setParameters({ tailHeight: val });
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Tail Width">
        <Slider
          min={10}
          max={width}
          value={tailWidth}
          onChange={(val: number) => {
            setParameters({ tailWidth: val });
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Tail Length">
        <Slider
          min={10}
          max={500}
          value={tailLength}
          onChange={(val: number) => {
            setParameters({ tailLength: val });
          }}
        />
      </Input.Wrapper>
    </>
  );
}
export default TailInputForm;

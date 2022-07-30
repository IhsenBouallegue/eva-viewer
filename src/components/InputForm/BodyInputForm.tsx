import { InputWrapper, Slider } from "@mantine/core";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function BodyInputForm() {
  const {
    setParameters,
    sigma,
    width,
    height,
    slantLength,
    totalLength,
    alpha,
    bodyHeight,
  } = useEvaViewerContext();
  return (
    <>
      <InputWrapper label="Alpha">
        <Slider
          placeholder="Alpha"
          value={alpha}
          min={20}
          max={90}
          onChange={(val: number) => {
            setParameters({ alpha: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Sigma">
        <Slider
          min={30}
          max={60}
          value={sigma}
          onChange={(val: number) => {
            setParameters({ sigma: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Width">
        <Slider
          min={50}
          max={300}
          value={width}
          onChange={(val: number) => {
            setParameters({ width: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Head Height">
        <Slider
          min={10}
          max={100}
          value={height}
          onChange={(val: number) => {
            setParameters({ height: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Belly Height">
        <Slider
          min={10}
          max={100}
          value={bodyHeight}
          onChange={(val: number) => {
            setParameters({ bodyHeight: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Slant Length">
        <Slider
          min={10}
          max={width}
          value={slantLength}
          onChange={(val: number) => {
            setParameters({ slantLength: val });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Total Length">
        <Slider
          min={200}
          max={700}
          value={totalLength}
          onChange={(val: number) => {
            setParameters({ totalLength: val });
          }}
        />
      </InputWrapper>
    </>
  );
}
export default BodyInputForm;

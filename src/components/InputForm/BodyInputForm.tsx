import { Input, Slider } from "@mantine/core";

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
      <Input.Wrapper label="Alpha">
        <Slider
          placeholder="Alpha"
          value={alpha}
          min={20}
          max={90}
          onChange={(val: number) => {
            setParameters({ alpha: val });
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Sigma">
        <Slider
          min={30}
          max={60}
          value={sigma}
          onChange={(val: number) => {
            setParameters({ sigma: val });
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Width">
        <Slider
          min={50}
          max={300}
          value={width}
          onChange={(val: number) => {
            setParameters({ width: val });
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Head Height">
        <Slider
          min={10}
          max={100}
          value={height}
          onChange={(val: number) => {
            setParameters({ height: val });
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Belly Height">
        <Slider
          min={10}
          max={100}
          value={bodyHeight}
          onChange={(val: number) => {
            setParameters({ bodyHeight: val });
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Slant Length">
        <Slider
          min={10}
          max={width}
          value={slantLength}
          onChange={(val: number) => {
            setParameters({ slantLength: val });
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Total Length">
        <Slider
          min={200}
          max={700}
          value={totalLength}
          onChange={(val: number) => {
            setParameters({ totalLength: val });
          }}
        />
      </Input.Wrapper>
    </>
  );
}
export default BodyInputForm;

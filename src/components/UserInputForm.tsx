import { NumberInput } from "@mantine/core";

interface Props {
  setTopPartParameters: any;
  topPartParameters: any;
}

export function UserInputForm({
  setTopPartParameters,
  topPartParameters,
}: Props) {
  return (
    <>
      <NumberInput
        defaultValue={45}
        placeholder="Sigma"
        label="Sigma"
        required
        value={topPartParameters.sigma}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, sigma: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Height"
        label="Height"
        required
        value={topPartParameters.height}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, height: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Slant Length"
        label="Slant Length"
        required
        value={topPartParameters.slantLength}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, slantLength: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Width"
        label="Width"
        required
        value={topPartParameters.width}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, width: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Total Length"
        label="Total Length"
        required
        value={topPartParameters.totalLength}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, totalLength: val });
        }}
      />
    </>
  );
}

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
        value={topPartParameters.sigma}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, sigma: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Height"
        label="Height"
        value={topPartParameters.height}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, height: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Slant Length"
        label="Slant Length"
        value={topPartParameters.slantLength}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, slantLength: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Width"
        label="Width"
        value={topPartParameters.width}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, width: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Total Length"
        label="Total Length"
        value={topPartParameters.totalLength}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, totalLength: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Alpha"
        label="Alpha"
        value={topPartParameters.alpha}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, alpha: val });
        }}
      />
      <NumberInput
        defaultValue={20}
        placeholder="Body Height"
        label="Body Height"
        value={topPartParameters.bodyHeight}
        onChange={(val: number) => {
          setTopPartParameters({ ...topPartParameters, bodyHeight: val });
        }}
      />
    </>
  );
}
export default UserInputForm;

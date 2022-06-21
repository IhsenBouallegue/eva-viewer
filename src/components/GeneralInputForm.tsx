import { NumberInput } from "@mantine/core";

import type { BodyParameters } from "../types/Types";

export function GeneralInputForm({
  setBodyParameters,
  ...bodyParameters
}: { setBodyParameters: any } & BodyParameters) {
  return (
    <NumberInput
      defaultValue={20}
      placeholder="Alpha"
      label="Alpha"
      value={bodyParameters.alpha}
      onChange={(val: number) => {
        setBodyParameters({ ...bodyParameters, alpha: val });
      }}
    />
  );
}
export default GeneralInputForm;

import { ColorInput, NumberInput, Switch } from "@mantine/core";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function GeneralInputForm() {
  const { setParameters, alpha, showBodyDistances, airplaneColor } =
    useEvaViewerContext();
  return (
    <>
      <NumberInput
        placeholder="Alpha"
        label="Alpha"
        value={alpha}
        onChange={(val: number) => {
          setParameters({ alpha: val });
        }}
      />
      <ColorInput
        placeholder="Pick color"
        label="Airplane Color"
        value={airplaneColor}
        onChange={(color) => {
          setParameters({ airplaneColor: color });
        }}
      />
      <Switch
        mt={16}
        checked={showBodyDistances}
        label="Show Body Distances"
        onChange={(event) => {
          setParameters({ showBodyDistances: event.currentTarget.checked });
        }}
      />
    </>
  );
}
export default GeneralInputForm;

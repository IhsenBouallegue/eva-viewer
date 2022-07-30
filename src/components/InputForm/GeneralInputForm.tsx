import { ColorInput, Switch } from "@mantine/core";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function GeneralInputForm() {
  const { setParameters, showBodyDistances, showTailDistances, airplaneColor } =
    useEvaViewerContext();
  return (
    <>
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
      <Switch
        mt={16}
        checked={showTailDistances}
        label="Show Tail Distances"
        onChange={(event) => {
          setParameters({ showTailDistances: event.currentTarget.checked });
        }}
      />
    </>
  );
}
export default GeneralInputForm;

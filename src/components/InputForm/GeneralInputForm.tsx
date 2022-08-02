import { Button, ColorInput, Switch } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function GeneralInputForm() {
  const {
    setParameters,
    showBodyDistances,
    showTailDistances,
    airplaneColor,
    ...rest
  } = useEvaViewerContext();
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <ColorInput
        sx={{ width: "16em" }}
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
        label="Show Body Measurements"
        onChange={(event) => {
          setParameters({ showBodyDistances: event.currentTarget.checked });
        }}
      />
      <Switch
        mt={16}
        checked={showTailDistances}
        label="Show Tail Measurements"
        onChange={(event) => {
          setParameters({ showTailDistances: event.currentTarget.checked });
        }}
      />
      <Button
        mt={16}
        onClick={() => {
          if (rest) {
            setSearchParams({
              airplaneColor,
              ...rest,
            } as unknown as string);
          } else {
            setSearchParams({});
          }
        }}
      >
        Share
      </Button>
    </>
  );
}
export default GeneralInputForm;

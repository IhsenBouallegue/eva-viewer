import { ColorInput, Switch } from "@mantine/core";
import { useState } from "react";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

import FileButtons from "./FileButtons";

export function GeneralInputForm() {
  const {
    setParameters,
    showBodyDistances,
    showTailDistances,
    airplaneColor,
    ...rest
  } = useEvaViewerContext();
  // TODO: Add searchParams to URL and copy them
  // const [, setSearchParams] = useSearchParams();
  // useEffect(() => {
  //   if (rest) {
  //     setSearchParams({
  //       airplaneColor,
  //       ...rest,
  //     } as unknown as string);
  //   } else {
  //     setSearchParams({});
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [airplaneColor]);
  const [, setFile] = useState<File | null>(null);

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
      <FileButtons
        parameters={{ airplaneColor, ...rest }}
        setParameters={setParameters}
        setFile={setFile}
      />
    </>
  );
}
export default GeneralInputForm;

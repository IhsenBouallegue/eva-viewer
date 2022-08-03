import { CopyButton, Button, ColorInput, Switch } from "@mantine/core";

import { useEvaViewerContext } from "../../context/EvaViewerContext";

export function GeneralInputForm() {
  const {
    setParameters,
    showBodyDistances,
    showTailDistances,
    airplaneColor,
    // ...rest
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
      <CopyButton value={window.location.href}>
        {({ copied, copy }) => (
          <Button mt={16} color={copied ? "orange" : "yellow"} onClick={copy}>
            {copied ? "Copied! 👌" : "Share url"}
          </Button>
        )}
      </CopyButton>
    </>
  );
}
export default GeneralInputForm;

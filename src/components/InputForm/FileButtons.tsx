import { CopyButton, Button, FileButton, Group } from "@mantine/core";

import type { Parameters } from "../../types/Types";
import { exportToJson } from "../../utils/fileHelpers";

interface Props {
  parameters: Partial<Parameters>;
  setParameters: (arg0: Partial<Parameters>) => void;
  setFile: (arg0: File) => void;
}

function FileButtons({ parameters, setParameters, setFile }: Props) {
  return (
    <>
      <CopyButton value={window.location.href}>
        {({ copied, copy }) => (
          <Button mt={16} color={copied ? "orange" : "yellow"} onClick={copy}>
            {copied ? "Copied! 👌" : "Share url"}
          </Button>
        )}
      </CopyButton>
      <Button
        mt={16}
        onClick={(e: { preventDefault: () => void }) =>
          exportToJson(e, parameters)
        }
      >
        Download
      </Button>
      <Group position="center">
        <FileButton
          onChange={(file) => {
            if (file) {
              setFile(file);
              const fileReader = new FileReader();
              fileReader.readAsText(file, "UTF-8");
              fileReader.onload = (e) => {
                setParameters(JSON.parse(e.target?.result as string));
              };
            }
          }}
          accept="application/json,text/csv"
        >
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>
    </>
  );
}

export default FileButtons;

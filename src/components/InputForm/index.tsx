import { Tabs } from "@mantine/core";

import { BodyInputForm } from "./BodyInputForm";
import { GeneralInputForm } from "./GeneralInputForm";
import { TailInputForm } from "./TailInputForm";
import { WingInputForm } from "./WingInputForm";

export function InputForm() {
  return (
    <Tabs>
      <Tabs.Tab label="General">
        <GeneralInputForm />
      </Tabs.Tab>
      <Tabs.Tab label="Body">
        <BodyInputForm />
      </Tabs.Tab>
      <Tabs.Tab label="Tail">
        <TailInputForm />
      </Tabs.Tab>
      <Tabs.Tab label="Wing">
        <WingInputForm />
      </Tabs.Tab>
    </Tabs>
  );
}
export default InputForm;

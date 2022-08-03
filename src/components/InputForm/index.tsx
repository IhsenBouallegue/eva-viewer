import { Tabs } from "@mantine/core";

import { BodyInputForm } from "./BodyInputForm";
import { GeneralInputForm } from "./GeneralInputForm";
import { TailInputForm } from "./TailInputForm";
import { WingInputForm } from "./WingInputForm";

export function InputForm() {
  return (
    <Tabs defaultValue="general">
      <Tabs.List>
        <Tabs.Tab value="general">General</Tabs.Tab>
        <Tabs.Tab value="body">Body</Tabs.Tab>
        <Tabs.Tab value="tail">Tail</Tabs.Tab>
        <Tabs.Tab value="wing">Wing</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="general">
        <GeneralInputForm />
      </Tabs.Panel>
      <Tabs.Panel value="body">
        <BodyInputForm />
      </Tabs.Panel>
      <Tabs.Panel value="tail">
        <TailInputForm />
      </Tabs.Panel>
      <Tabs.Panel value="wing">
        <WingInputForm />
      </Tabs.Panel>
    </Tabs>
  );
}
export default InputForm;

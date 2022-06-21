import { Tabs } from "@mantine/core";

import type { BodyParameters } from "../types/Types";

import { HeadInputForm } from "./HeadInputForm";

interface Props {
  bodyParameters: BodyParameters;
  setBodyParameters: any;
}

export function UserInputForm({ bodyParameters, setBodyParameters }: Props) {
  return (
    <Tabs>
      <Tabs.Tab label="General">Gallery tab content</Tabs.Tab>
      <Tabs.Tab label="Head">
        <HeadInputForm
          setBodyParameters={setBodyParameters}
          {...bodyParameters}
        />
      </Tabs.Tab>
      <Tabs.Tab label="Body">Messages tab content</Tabs.Tab>
      <Tabs.Tab label="Tail">Settings tab content</Tabs.Tab>
    </Tabs>
  );
}
export default UserInputForm;

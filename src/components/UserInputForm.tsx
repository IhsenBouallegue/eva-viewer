import { Tabs } from "@mantine/core";

import type { BodyParameters, TailParameters } from "../types/Types";

import { BellyInputForm } from "./BellyInputForm";
import { GeneralInputForm } from "./GeneralInputForm";
import { HeadInputForm } from "./HeadInputForm";
import { TailInputForm } from "./TailInputForm";

interface Props {
  bodyParameters: BodyParameters;
  setBodyParameters: (val: BodyParameters) => void;
  tailParameters: TailParameters;
  setTailParameters: (val: TailParameters) => void;
}

export function UserInputForm() {
  return (
    <Tabs>
      <Tabs.Tab label="General">
        <GeneralInputForm />
      </Tabs.Tab>
      <Tabs.Tab label="Head">
        <HeadInputForm />
      </Tabs.Tab>
      <Tabs.Tab label="Belly">
        <BellyInputForm />
      </Tabs.Tab>
      <Tabs.Tab label="Tail">
        <TailInputForm />
      </Tabs.Tab>
    </Tabs>
  );
}
export default UserInputForm;

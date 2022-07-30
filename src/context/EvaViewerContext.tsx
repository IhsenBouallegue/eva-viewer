import React, { useContext, useState } from "react";

import type { Parameters } from "../types/Types";

import defaultParameters from "./defaultParameters";

const EvaViewerContext = React.createContext({
  ...defaultParameters,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setParameters: (parameters: Partial<Parameters>) => {},
});

export const useEvaViewerContext = () => {
  return useContext(EvaViewerContext);
};

export const EvaViewerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const setParameters = (parameters: Partial<Parameters>) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setState((prevState) => ({
      ...prevState,
      ...parameters,
    }));
  };
  const initState = {
    ...defaultParameters,
    setParameters,
  };

  const [state, setState] = useState(initState);

  return (
    <EvaViewerContext.Provider value={state}>
      {children}
    </EvaViewerContext.Provider>
  );
};

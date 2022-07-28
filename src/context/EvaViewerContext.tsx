import React, { useContext, useState } from "react";

import { BodyParameters, TailParameters } from "../types/Types";

const defualtBodyParameters: BodyParameters = {
  sigma: 45,
  height: 20,
  slantLength: 20,
  width: 93,
  totalLength: 700,
  bodyHeight: 50,
  alpha: 45,
};
const defualtTailParameters: TailParameters = {
  tailLength: 100,
  tailWidth: 10,
  tailHeight: 10,
  alpha: 45,
};

const EvaViewerContext = React.createContext({
  ...defualtBodyParameters,
  ...defualtTailParameters,
  setParameters: (parameters: any) => {},
});

export const useEvaViewerContext = () => {
  return useContext(EvaViewerContext);
};

export const EvaViewerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const setParameters = (parameters: any) => {
    setState((prevState) => ({
      ...prevState,
      ...parameters,
    }));
  };

  const initState = {
    ...defualtBodyParameters,
    ...defualtTailParameters,
    setParameters: setParameters,
  };

  const [state, setState] = useState(initState);

  return (
    <EvaViewerContext.Provider value={state}>
      {children}
    </EvaViewerContext.Provider>
  );
};

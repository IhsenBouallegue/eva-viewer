import React, { useContext, useState } from "react";
import defaultParameters from "./defaultParameters";

const EvaViewerContext = React.createContext({
  ...defaultParameters,
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
    ...defaultParameters,
    setParameters: setParameters,
  };

  const [state, setState] = useState(initState);

  return (
    <EvaViewerContext.Provider value={state}>
      {children}
    </EvaViewerContext.Provider>
  );
};

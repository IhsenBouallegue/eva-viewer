import {
  AirplaneParameters,
  BodyParameters,
  TailParameters,
} from "../types/Types";

const defualtBodyParameters: BodyParameters = {
  sigma: 45,
  height: 20,
  slantLength: 20,
  width: 93,
  totalLength: 400,
  bodyHeight: 50,
  alpha: 45,
};
const defualtTailParameters: TailParameters = {
  tailLength: 300,
  tailWidth: 40,
  tailHeight: 40,
  alpha: 45,
};

export default {
  ...defualtBodyParameters,
  ...defualtTailParameters,
} as AirplaneParameters;

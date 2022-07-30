import type {
  BodyParameters,
  MiscParameters,
  Parameters,
  TailParameters,
  WingParameters,
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

const defaultWingParameters: WingParameters = {
  wingLength: 160,
  wingHeight: 19,
  wingSpan: 700,
};

const defaultMiscParameters: MiscParameters = {
  showBodyDistances: false,
  showTailDistances: false,
  airplaneColor: "#646572",
};

export default {
  ...defaultMiscParameters,
  ...defualtBodyParameters,
  ...defualtTailParameters,
  ...defaultWingParameters,
} as Parameters;

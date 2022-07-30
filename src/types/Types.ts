export interface HeadParameters {
  sigma: number;
  height: number;
  width: number;
  slantLength: number;
  totalLength: number;
}

export interface MiscParameters {
  showBodyDistances: boolean;
  showTailDistances: boolean;
  airplaneColor: string;
}

export interface BellyParameters {
  alpha: number;
  width: number;
  totalLength: number;
  bodyHeight: number;
}

export interface BodyParameters extends HeadParameters, BellyParameters {}

export interface TailParameters {
  alpha: number;
  tailWidth: number;
  tailHeight: number;
  tailLength: number;
}
export interface WingParameters {
  wingLength: number;
  wingHeight: number;
  wingSpan: number;
}

export interface AirplaneParameters
  extends BodyParameters,
    TailParameters,
    WingParameters {}

export interface Parameters extends AirplaneParameters, MiscParameters {}

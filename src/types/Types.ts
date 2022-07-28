export interface HeadParameters {
  sigma: number;
  height: number;
  width: number;
  slantLength: number;
  totalLength: number;
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

export interface AirplaneParameters extends BodyParameters, TailParameters {}

import type { StandardizedStyleWithVariantsAndMedia } from './standardized-style';

interface InjectStylesFunctionOptions {
  media?: Record<string, string>;
}

export type InjectStylesFunction = (
  component: React.ComponentType<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  styles: StandardizedStyleWithVariantsAndMedia<any, any, any> // eslint-disable-line @typescript-eslint/no-explicit-any
) => React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export type InjectStylesFunctionGenerator = (
  options: InjectStylesFunctionOptions
) => InjectStylesFunction;

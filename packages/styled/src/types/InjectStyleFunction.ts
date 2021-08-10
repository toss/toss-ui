import type { StandardizedStyleWithVariants } from './standardized-style';

export type InjectStylesFunction = (
  component: React.ComponentType<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  styles: StandardizedStyleWithVariants<any, any> // eslint-disable-line @typescript-eslint/no-explicit-any
) => React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

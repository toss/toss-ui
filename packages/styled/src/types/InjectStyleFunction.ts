import type { StandardizedStyleWithVariants } from './standardized-style';

export type InjectStylesFunction = (
  component: React.ComponentType<any>,
  styles: StandardizedStyleWithVariants<any, any>
) => React.ComponentType<any>;

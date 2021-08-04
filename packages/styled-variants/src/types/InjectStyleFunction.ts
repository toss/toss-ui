import type { StandardizedStyleWithVariants } from './standardized-style';

export type InjectStyleFunction = (
  component: React.ComponentType<any>,
  styles: StandardizedStyleWithVariants<unknown, unknown>
) => React.ComponentType<any>;

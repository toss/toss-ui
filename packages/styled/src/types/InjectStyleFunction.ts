import type { StandardizedStyleWithVariants } from './standardized-style';

export type InjectStylesFunction = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>,
  styles: StandardizedStyleWithVariants<
    Record<string, unknown>,
    Record<string, unknown>
  >
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => React.ComponentType<any>;

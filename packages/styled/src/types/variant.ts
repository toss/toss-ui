import { CSSProperties } from './standardized-style';

export type VariantConfig<Variant extends string | number | symbol> = Record<
  Variant,
  CSSProperties
>;

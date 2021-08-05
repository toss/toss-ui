import { CSSProperties } from './css-properties';

export type VariantConfig<Variant extends string | number | symbol> = Record<
  Variant,
  CSSProperties
>;

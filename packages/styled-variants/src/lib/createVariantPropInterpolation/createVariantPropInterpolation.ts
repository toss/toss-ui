import { CSSProperties } from 'react';

export type VariantConfig<Variants extends string> = Record<
  Variants,
  CSSProperties
>;

export function createVariantPropInterpolation<
  PropName extends string,
  Variants extends string
>(propName: PropName, config: VariantConfig<Variants>) {
  return (props: { [key in PropName]: Variants }): any =>
    config[props[propName]];
}

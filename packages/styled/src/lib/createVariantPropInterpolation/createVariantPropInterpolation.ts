import { VariantConfig } from '../../types';

export function createVariantPropInterpolation<
  PropName extends string,
  Variants extends string
>(propName: PropName, config: VariantConfig<Variants>) {
  return (props: { [key in PropName]: Variants }): any =>
    config[props[propName]];
}

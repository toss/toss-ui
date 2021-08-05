import { CSSObject } from './css-properties';
import { VariantConfig } from './variant';

// TODO: VariantConfig 의 올바른 generic type 지정하기
export type StandardizedStylePrimitive = CSSObject | VariantConfig<string>;

export type StandardizedStyle =
  | StandardizedStylePrimitive
  | StandardizedStyle[];

export type StandardizedStyleWithVariants<
  Variants,
  DefaultVariants extends Variants
> = StandardizedStyle & {
  variants?: {
    [variantName in keyof Variants]: VariantConfig<keyof Variants[variantName]>;
  };
  defaultVariants?: {
    [k in keyof DefaultVariants]?: keyof DefaultVariants[k];
  };
};

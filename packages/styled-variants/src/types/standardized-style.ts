import * as CSS from 'csstype';
import { VariantConfig } from './variant';

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };
export type CSSProperties = CSS.PropertiesFallback<number | string>;
export type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]:
    | CSSProperties[K]
    | Extract<CSSProperties[K], string>[];
};

export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudos {}

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

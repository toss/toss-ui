import React from 'react';
import type {
  InjectStylesFunctionGenerator,
  StandardizedStyleWithVariantsAndMedia,
} from '../../types';
import { injectReactInlineStylesGenerator } from '../inject-styles';

interface StyledOptions<Media extends string> {
  injectStylesGenerator?: InjectStylesFunctionGenerator;
  media?: Record<Media, string>;
}

type StyledComponentType<
  OriginalComponent extends React.ComponentType,
  Variants,
  Media extends string
> = React.ComponentType<
  React.ComponentProps<OriginalComponent> &
    {
      [variant in keyof Variants]?:
        | keyof Variants[variant]
        | { [key in Media as `@${key}`]?: keyof Variants[variant] };
    }
>;

type StyledFunction<Media extends string> = <
  OriginalComponent extends React.ComponentType,
  Variants,
  DefaultVariants extends Variants
>(
  component: OriginalComponent,
  styles: StandardizedStyleWithVariantsAndMedia<
    Variants,
    DefaultVariants,
    Media
  >
) => StyledComponentType<OriginalComponent, Variants, Media>;

export function createStyled<Media extends string>({
  injectStylesGenerator = injectReactInlineStylesGenerator,
  media,
}: StyledOptions<Media> = {}): StyledFunction<Media> {
  const injectStyles = injectStylesGenerator({ media });
  return (component, styles) => injectStyles(component, styles);
}

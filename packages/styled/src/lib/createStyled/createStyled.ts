import React from 'react';
import type {
  InjectStylesFunctionGenerator,
  StandardizedStyleWithVariants,
} from '../../types';
import { injectReactInlineStylesGenerator } from '../inject-styles';

interface StyledOptions<Media extends string> {
  injectStylesGenerator?: InjectStylesFunctionGenerator;
  media?: Record<Media, string>;
}

type StyledFunction = <
  C extends React.ComponentType<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  Variants,
  DefaultVariants extends Variants
>(
  component: C,

  styles: StandardizedStyleWithVariants<Variants, DefaultVariants>
) => React.ComponentType<
  React.ComponentProps<C> &
    {
      [k in keyof Variants]?: keyof Variants[k];
    }
>;

export function createStyled<Media extends string>({
  injectStylesGenerator = injectReactInlineStylesGenerator,
  media,
}: StyledOptions<Media> = {}): StyledFunction {
  const injectStyles = injectStylesGenerator({ media });
  return <
    C extends React.ComponentType<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
    Variants,
    DefaultVariants extends Variants
  >(
    component: C,

    styles: StandardizedStyleWithVariants<Variants, DefaultVariants>
  ): React.ComponentType<
    React.ComponentProps<C> &
      {
        [k in keyof Variants]?: keyof Variants[k];
      }
  > => injectStyles(component, styles);
}

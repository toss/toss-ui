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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStyled<Media extends string>({
  injectStylesGenerator = injectReactInlineStylesGenerator,
  media,
}: StyledOptions<Media> = {}) {
  const injectStyles = injectStylesGenerator({ media });
  return <
    C extends React.ComponentType<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
    Variants,
    DefaultVariants extends Variants
  >(
    component: C,

    styles: StandardizedStyleWithVariantsAndMedia<
      Variants,
      DefaultVariants,
      Media
    >
  ): React.ComponentType<
    React.ComponentProps<C> &
      {
        [k in keyof Variants]?: keyof Variants[k];
      }
  > => injectStyles(component, styles);
}

import React from 'react';
import type {
  InjectStyleFunction,
  StandardizedStyleWithVariants,
} from '../../types';
import { injectReactInlineStyles } from '../inject-styles';

interface StyledOptions {
  injectStyle?: InjectStyleFunction;
}

export function createStyled(options: StyledOptions = {}) {
  return <
    C extends React.ComponentType,
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
  > => (options.injectStyle ?? injectReactInlineStyles)(component, styles);
}

import type { ComponentProps } from 'react';
import React from 'react';
import type { InjectStylesFunction } from '../../types';
import { createVariantPropInterpolation } from '../createVariantPropInterpolation';

export const injectReactInlineStyles: InjectStylesFunction =
  (component, styles) => (props: ComponentProps<typeof component>) => {
    const { variants, defaultVariants, ...cssStyles } = styles;
    const interpolatedStyles = Object.entries(styles.variants ?? {})
      .map(([variantName, config]) =>
        createVariantPropInterpolation(variantName, config)(props)
      )
      .reduce(
        (accStyle, currentStyle) => ({ ...accStyle, ...currentStyle }),
        {}
      );
    return React.createElement(component, {
      ...props,
      style: { ...cssStyles, ...interpolatedStyles, ...props.style },
    });
  };

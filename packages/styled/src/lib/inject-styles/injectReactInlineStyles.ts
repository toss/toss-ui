import React from 'react';
import type { InjectStylesFunction } from '../../types';
import { createVariantPropInterpolation } from '../createVariantPropInterpolation';

export const injectReactInlineStyles: InjectStylesFunction =
  (component, styles) => (props) => {
    const { variants, defaultVariants, ...cssStyles } = styles;
    const interpolatedStyles = Object.entries(variants ?? {})
      .map(([variantName, config]) =>
        Object.entries(
          createVariantPropInterpolation(variantName, config)(props)
        )
      )
      .reduce(
        (accStyle, currentStyle) => ({ ...accStyle, ...currentStyle }),
        {}
      );

    return React.createElement(component, {
      ...props,

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      style: {
        ...cssStyles,
        ...interpolatedStyles,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, react/prop-types
        ...props.style,
      },
    });
  };

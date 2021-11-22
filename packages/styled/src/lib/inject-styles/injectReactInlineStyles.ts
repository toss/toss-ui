import React from 'react';
import type { InjectStylesFunctionGenerator } from '../../types';
import { createVariantPropInterpolation } from '../createVariantPropInterpolation';

export const injectReactInlineStylesGenerator: InjectStylesFunctionGenerator =
  ({ media = {} }) =>
  (component, { variants, defaultVariants, ...cssStyles }) =>
  (props) => {
    // TODO: implement media query

    const interpolatedStyles = Object.entries(variants ?? {})
      .map(([variantName, config]) =>
        createVariantPropInterpolation(variantName, config, media)(props)
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

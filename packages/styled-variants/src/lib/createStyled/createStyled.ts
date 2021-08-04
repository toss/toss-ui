import React, { ComponentProps } from 'react';
import type { StandardizedStyleWithVariants } from '../../types';
import { createVariantPropInterpolation } from '../createVariantPropInterpolation';

type InjectStyleFunction = (
  component: React.ComponentType<any>,
  styles: StandardizedStyleWithVariants<unknown, unknown>
) => React.ComponentType<any>;

interface StyledOptions {
  injectStyle?: InjectStyleFunction;
}

const defaultInjectStyle: InjectStyleFunction =
  (component, styles: StandardizedStyleWithVariants<any, any>) =>
  (props: ComponentProps<typeof component>) => {
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
  > => (options.injectStyle ?? defaultInjectStyle)(component, styles);
}

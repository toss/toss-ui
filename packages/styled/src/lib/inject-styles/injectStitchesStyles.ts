import { styled as stitchesStyled } from '@stitches/react';
import type { InjectStylesFunction } from '../../types';

export const injectStitchesStyles: InjectStylesFunction = (
  component,
  styles
) => {
  const { variants, defaultVariants, ...cssStyles } = styles;
  return stitchesStyled(component, {
    ...(cssStyles as any),
    variants,
    defaultVariants,
  });
};

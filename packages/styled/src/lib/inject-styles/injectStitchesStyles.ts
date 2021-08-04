import { styled as stitchesStyled } from '@stitches/react';
import type {
  InjectStyleFunction,
  StandardizedStyleWithVariants,
} from '../../types';

export const injectStitchesStyles: InjectStyleFunction = (
  component,
  styles: StandardizedStyleWithVariants<any, any>
) => {
  const { variants, defaultVariants, ...cssStyles } = styles;
  return stitchesStyled(component, {
    ...(cssStyles as any),
    variants,
    defaultVariants,
  });
};

import { styled as stitchesStyled } from '@stitches/react';
import type { InjectStylesFunction } from '../../types';

export const injectStitchesStyles: InjectStylesFunction = (
  component,
  styles
) => {
  const { variants, defaultVariants, ...cssStyles } = styles;
  return stitchesStyled(component, {
    // FIXME: 타입 세이프하게 타입 변경하기
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(cssStyles as any),
    variants,
    defaultVariants,
  });
};

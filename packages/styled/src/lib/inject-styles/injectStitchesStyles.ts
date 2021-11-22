import { styled as stitchesStyled } from '@stitches/react';
import type { InjectStylesFunctionGenerator } from '../../types';

export const injectStitchesStylesGenerator: InjectStylesFunctionGenerator = ({
  media,
}) => {
  // TODO: make media query works
  console.log(media);

  return (component, styles) => {
    const { variants, defaultVariants, ...cssStyles } = styles;
    return stitchesStyled(component, {
      // FIXME: 타입 세이프하게 타입 변경하기
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(cssStyles as any),
      variants,
      defaultVariants,
    });
  };
};

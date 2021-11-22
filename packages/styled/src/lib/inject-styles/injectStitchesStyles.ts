import { styled as stitchesStyled } from '@stitches/react';
import type { InjectStylesFunctionGenerator } from '../../types';

// FIXME: @stitches/react 의 타입에서 createStitches을 export 하지 않음.
// https://iboxshare.com/modulz/stitches/issues/833
// eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
const { createStitches } = require('@stitches/react');

export const injectStitchesStylesGenerator: InjectStylesFunctionGenerator = ({
  media,
}) => {
  const { styled }: { styled: typeof stitchesStyled } = createStitches({
    media,
  });

  // TODO: make media query works

  return (component, styles) => {
    const { variants, defaultVariants, ...cssStyles } = styles;
    return styled(component, {
      // FIXME: 타입 세이프하게 타입 변경하기
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(cssStyles as any),
      variants,
      defaultVariants,
    });
  };
};

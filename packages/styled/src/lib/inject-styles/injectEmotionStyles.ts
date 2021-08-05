import emotionStyled from '@emotion/styled';
import type { InjectStylesFunction as InjectStylesFunction } from '../../types';
import { createVariantPropInterpolation } from '../createVariantPropInterpolation';

export const injectEmotionStyles: InjectStylesFunction = (
  component,
  styles
) => {
  const { variants, defaultVariants, ...cssStyles } = styles;
  const interpolatedStyles = Object.entries(styles.variants ?? {}).map(
    ([variantName, config]) =>
      createVariantPropInterpolation(variantName, config)
  );
  // FIXME: CSS.Pseudos 으로 감싸진 스타일 지원하고 any 제거하기
  return emotionStyled(component)(cssStyles as any, ...interpolatedStyles);
};

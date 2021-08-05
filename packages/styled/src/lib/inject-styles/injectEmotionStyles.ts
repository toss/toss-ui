import emotionStyled from '@emotion/styled';
import type { InjectStylesFunction } from '../../types';
import { createVariantPropInterpolation } from '../createVariantPropInterpolation';

export const injectEmotionStyles: InjectStylesFunction = (
  component,
  { variants, defaultVariants, ...cssStyles }
) => {
  const interpolatedStyles = Object.entries(variants ?? {}).map(
    ([variantName, config]) =>
      createVariantPropInterpolation(variantName, config)
  );
  return emotionStyled(component)(
    // FIXME: CSS.Pseudos 으로 감싸진 스타일 지원하고 any 제거하기
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cssStyles as any,
    // TODO: emotion 타입으로 변환해주기
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(interpolatedStyles as any)
  );
};

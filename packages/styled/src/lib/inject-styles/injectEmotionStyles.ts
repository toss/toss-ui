import emotionStyled from '@emotion/styled';
import { mapObject } from '@toss-ui/utils';
import { InjectStylesFunctionGenerator } from '../../types';
import { createVariantPropInterpolation } from '../createVariantPropInterpolation';

export const injectEmotionStylesGenerator: InjectStylesFunctionGenerator = ({
  media = {},
}) => {
  const prefixedMedia = mapObject(media, (key, value) => [
    `@${key}`,
    `@media ${value}`,
  ]);
  return (component, { variants = {}, defaultVariants, ...cssStyles }) => {
    const responsiveStyles = mapObject(
      cssStyles as Record<string, unknown>,
      (key, value) => [prefixedMedia?.[key] ?? key, value]
    );

    const interpolatedStyles = Object.entries(variants).map(
      ([variantName, config]) =>
        createVariantPropInterpolation(variantName, config, prefixedMedia)
    );

    return emotionStyled(component)(
      // FIXME: CSS.Pseudos 으로 감싸진 스타일 지원하고 any 제거하기
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      responsiveStyles as any,
      // TODO: emotion 타입으로 변환해주기
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(interpolatedStyles as any)
    );
  };
};

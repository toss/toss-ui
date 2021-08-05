import emotion from '@emotion/styled';
import styledComponents from 'styled-components';
import { createVariantPropInterpolation } from '../../src';

const backgroundColorVariant = createVariantPropInterpolation(
  'backgroundColor',
  {
    success: { backgroundColor: 'seagreen' },
    danger: { backgroundColor: 'hotpink' },
  }
);

export const EmotionBox = emotion.div(backgroundColorVariant as any, {
  width: 100,
  height: 100,
});

export const StyledComponentsBox = styledComponents.div(
  backgroundColorVariant as any,
  {
    width: 100,
    height: 100,
  }
);

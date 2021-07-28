import emotion from '@emotion/styled';
import styledComponents from 'styled-components';
import { createVariantPropInterpolation } from '../createVariantPropInterpolation';

const backgroundColorVariant = createVariantPropInterpolation(
  'backgroundColor',
  {
    success: { backgroundColor: 'seagreen' },
    danger: { backgroundColor: 'hotpink' },
  }
);

export const EmotionBox = emotion.div(backgroundColorVariant, {
  width: 100,
  height: 100,
});

export const StyledComponentsBox = styledComponents.div(
  backgroundColorVariant,
  {
    width: 100,
    height: 100,
  }
);

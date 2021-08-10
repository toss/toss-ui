import emotion, { Interpolation } from '@emotion/styled';
// styled-components is only used in docs
// eslint-disable-next-line import/no-extraneous-dependencies
import styledComponents, { InterpolationFunction } from 'styled-components';
import { createVariantPropInterpolation } from '../../src';

const backgroundColorVariant = createVariantPropInterpolation(
  'backgroundColor',
  {
    success: { backgroundColor: 'seagreen' },
    danger: { backgroundColor: 'hotpink' },
  }
);

export const EmotionBox = emotion.div(
  backgroundColorVariant as Interpolation<unknown>,
  {
    width: 100,
    height: 100,
  }
);

export const StyledComponentsBox = styledComponents.div(
  backgroundColorVariant as InterpolationFunction<unknown>,
  {
    width: 100,
    height: 100,
  }
);

import { getEnvironmentVariables } from '../../utils';
import { createStyled } from '../createStyled';
import {
  injectEmotionStylesGenerator,
  injectStitchesStylesGenerator,
} from '../inject-styles';

export interface ProcessEnv {
  [key: string]: string | undefined;
}

const ENV_CSS_IN_JS = getEnvironmentVariables('TOSS_UI_STYLED__CSS_IN_JS');

const injectStylesGenerator =
  ENV_CSS_IN_JS === 'emotion'
    ? injectEmotionStylesGenerator
    : ENV_CSS_IN_JS === 'stitches'
    ? injectStitchesStylesGenerator
    : undefined;

export const styled = createStyled({ injectStylesGenerator });

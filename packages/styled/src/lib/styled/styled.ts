import { getEnvironmentVariables } from '../../utils';
import { createStyled } from '../createStyled';
import { injectEmotionStyles, injectStitchesStyles } from '../inject-styles';

export interface ProcessEnv {
  [key: string]: string | undefined;
}

const ENV_CSS_IN_JS = getEnvironmentVariables('TOSS_UI_STYLED__CSS_IN_JS');

const injectStyles =
  ENV_CSS_IN_JS === 'emotion'
    ? injectEmotionStyles
    : ENV_CSS_IN_JS === 'stitches'
    ? injectStitchesStyles
    : undefined;

export const styled = createStyled({ injectStyles });

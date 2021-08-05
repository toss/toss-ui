export interface EnvironmentVariables {
  TOSS_UI_STYLED__CSS_IN_JS?: 'none' | 'emotion' | 'stitches';
}

type PREFIXES = 'REACT_ENV_' | 'STORYBOOK_';

type EnvironmentVariablesForCRA = {
  [key in `${PREFIXES}${keyof EnvironmentVariables}`]: EnvironmentVariables[key extends `${PREFIXES}${infer originalKey}`
    ? originalKey
    : never];
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvironmentVariables {
      TOSS_UI_STYLED__CSS_IN_JS?: 'none' | 'emotion' | 'stitches';
    }
  }
}

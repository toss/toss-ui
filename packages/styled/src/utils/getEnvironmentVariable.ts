import { EnvironmentVariables } from '../global-types/environment';

export function getEnvironmentVariables(key: keyof EnvironmentVariables) {
  return (
    process.env[key] ??
    process.env[`REACT_APP_${key}`] ??
    process.env[`STORYBOOK_${key}`]
  );
}

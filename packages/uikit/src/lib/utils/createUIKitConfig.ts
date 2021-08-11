import { CSSProperties } from '@toss-ui/styled';
import { mapObject } from '@toss-ui/utils';
import { UIKitConfig, UIKitConfigOptions } from '../types/config';

export function createUIKitConfig<
  Color extends string,
  Typography extends string
>(
  config: UIKitConfigOptions<Color, Typography>
): UIKitConfig<Color, Typography> {
  const { colors, typographys } = config;
  return {
    color: mapObject(
      colors,
      (_, value) =>
        ({
          color: value,
        } as CSSProperties)
    ),
    backgroundColor: mapObject(
      colors,
      (_, value) =>
        ({
          backgroundColor: value,
        } as CSSProperties)
    ),
    typography: typographys,
  };
}

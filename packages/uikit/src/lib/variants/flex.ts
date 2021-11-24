import { CSSProperties, VariantConfig } from '@toss-ui/styled';
import { mapObject } from '@toss-ui/utils';
import { UIKitConfigOptions } from '../types';

export const flex = <
  Color extends string | number,
  Typography extends string | number,
  Space extends string | number
>(
  config: UIKitConfigOptions<Color, Typography, Space>
): {
  direction: VariantConfig<'horizontal' | 'vertical'>;
  gap: VariantConfig<Space>;
} => ({
  direction: {
    horizontal: {
      display: 'flex',
      flexDirection: 'row',
    },
    vertical: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  gap: {
    ...mapObject(config.space ?? {}, (key, value) => [
      key,
      {
        // FIXME: should support IE11
        gap: value,
      } as CSSProperties,
    ]),
  } as VariantConfig<Space>,
});

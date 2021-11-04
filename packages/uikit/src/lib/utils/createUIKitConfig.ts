import { CSSProperties, VariantConfig } from '@toss-ui/styled';
import { mapObject } from '@toss-ui/utils';
import { UIKitConfig, UIKitConfigOptions } from '../types/config';

function mapConfigValueToCSSVariant<Key extends string | number, Value>(
  configValue: Record<Key, Value> | undefined,
  cssPropertyNames: keyof CSSProperties | (keyof CSSProperties)[]
): VariantConfig<Key> {
  if (configValue === undefined) {
    return {} as VariantConfig<Key>;
  }

  const propertyNames = Array.isArray(cssPropertyNames)
    ? cssPropertyNames
    : [cssPropertyNames];
  return mapObject(
    configValue,
    (_, value) =>
      Object.fromEntries(
        propertyNames.map((propertyName) => [propertyName, value])
      ) as CSSProperties
  );
}

export function createUIKitConfig<
  Color extends string | number = never,
  Typography extends string | number = never,
  Space extends string | number = never
>(
  config: UIKitConfigOptions<Color, Typography, Space>
): UIKitConfig<Color, Typography, Space> {
  const { colors, typography, space } = config;
  // FIXME: 각 css property의 variant로 만드는 작업은 필요 이상으로 런타임 부하를 만든다.
  // - config value를 토큰화하여 css property 간에 공유하여 사용할 수 있게 변경한다
  // - build time에 계산되도록 변경한다
  return {
    backgroundColor: mapConfigValueToCSSVariant(colors, 'backgroundColor'),
    color: mapConfigValueToCSSVariant(colors, 'color'),
    marginBottom: mapConfigValueToCSSVariant(space, 'marginBottom'),
    marginLeft: mapConfigValueToCSSVariant(space, 'marginLeft'),
    marginRight: mapConfigValueToCSSVariant(space, 'marginRight'),
    marginTop: mapConfigValueToCSSVariant(space, 'marginTop'),
    marginHorizontal: mapConfigValueToCSSVariant(space, [
      'marginLeft',
      'marginRight',
    ]),
    marginVertical: mapConfigValueToCSSVariant(space, [
      'marginBottom',
      'marginTop',
    ]),
    typography: (typography ?? {}) as VariantConfig<Typography>,
  };
}

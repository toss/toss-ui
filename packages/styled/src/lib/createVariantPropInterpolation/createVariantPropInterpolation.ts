import { mapObject } from '@toss-ui/utils';
import { CSSProperties, VariantConfig } from '../../types';

export function createVariantPropInterpolation<
  PropName extends string,
  Variants extends string,
  Media extends string
>(
  propName: PropName,
  config: VariantConfig<Variants>,
  media: Record<Media, string>
) {
  return (
    props: { [key in PropName]: Variants | Record<Media, Variants> }
  ): CSSProperties | undefined => {
    const propValue = props[propName];

    if (propValue === undefined) {
      return undefined;
    }

    if (typeof propValue === 'string') {
      return config[propValue as Variants];
    }

    return mapObject(propValue, (key, value) => [
      media[key as Media] ?? key,
      config[value as Variants],
    ]);
  };
}

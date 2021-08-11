import { CSSProperties, VariantConfig } from '@toss-ui/styled';

type ColorTokenValue = CSSProperties['color'];
type TypographyTokenValue = Pick<
  CSSProperties,
  'fontSize' | 'fontWeight' | 'lineHeight'
>;

export interface UIKitConfigOptions<
  Color extends string,
  Typography extends string
> {
  colors: { [key in Color]: ColorTokenValue };
  typographys: {
    [key in Typography]: TypographyTokenValue;
  };
}

export interface UIKitConfig<Color extends string, Typography extends string> {
  color: VariantConfig<Color>;
  backgroundColor: VariantConfig<Color>;
  typography: VariantConfig<Typography>;
}

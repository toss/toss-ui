import { CSSProperties, VariantConfig } from '@toss-ui/styled';

type ColorTokenValue = CSSProperties['color'];
type TypographyTokenValue = Pick<
  CSSProperties,
  'fontSize' | 'fontWeight' | 'lineHeight'
>;
type SpaceTokenValue = CSSProperties['marginTop'];

export interface UIKitConfigOptions<
  Color extends string | number,
  Typography extends string | number,
  Space extends string | number
> {
  colors?: { [key in Color]: ColorTokenValue };
  typography?: {
    [key in Typography]: TypographyTokenValue;
  };
  space?: {
    [key in Space]: SpaceTokenValue;
  };
}

export interface UIKitConfig<
  Color extends string | number,
  Typography extends string | number,
  Space extends string | number
> {
  tokens: {
    colors?: { [key in Color]: ColorTokenValue };
    typography?: {
      [key in Typography]: TypographyTokenValue;
    };
    space?: {
      [key in Space]: SpaceTokenValue;
    };
  };
  variants: {
    color: VariantConfig<Color>;
    backgroundColor: VariantConfig<Color>;
    typography: VariantConfig<Typography>;
    marginTop: VariantConfig<Space>;
    marginRight: VariantConfig<Space>;
    marginBottom: VariantConfig<Space>;
    marginLeft: VariantConfig<Space>;
    marginHorizontal: VariantConfig<Space>;
    marginVertical: VariantConfig<Space>;
  };
}

import { createVariantPropInterpolation } from './createVariantPropInterpolation';

describe('createVariantPropInterpolation', () => {
  it('When passing variant props, the corresponding style object is returned', () => {
    // arrange
    const variantName = 'color';
    const variantConfig = {
      white: {
        color: '#ffffff',
      },
      black: {
        color: '#000000',
      },
    };
    const whiteColorProp: { color: 'white' | 'black' } = {
      color: 'white',
    };
    const blackColorProp: { color: 'white' | 'black' } = {
      color: 'black',
    };

    // act
    const colorVariantPropInterpolation = createVariantPropInterpolation(
      variantName,
      variantConfig,
      {}
    );
    const whiteColorCSSProps = colorVariantPropInterpolation(whiteColorProp);
    const blackColorCSSProps = colorVariantPropInterpolation(blackColorProp);

    // assert
    expect(whiteColorCSSProps).toStrictEqual({
      color: variantConfig.white.color,
    });
    expect(blackColorCSSProps).toStrictEqual({
      color: variantConfig.black.color,
    });
  });

  // TODO: test media feature
});

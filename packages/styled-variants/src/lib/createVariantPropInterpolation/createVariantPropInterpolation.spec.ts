import { createVariantPropInterpolation } from './createVariantPropInterpolation';

describe('createVariantPropInterpolation', () => {
  it('When passing variant props, the corresponding style object is returned', () => {
    // arrange
    const colorVariantPropInterpolation = createVariantPropInterpolation(
      'color',
      {
        white: {
          color: '#ffffff',
        },
        black: {
          color: '#000000',
        },
      }
    );
    const whiteColorProp: { color: 'white' | 'black' } = {
      color: 'white',
    };
    const blackColorProp: { color: 'white' | 'black' } = {
      color: 'black',
    };

    // act
    const whiteColorCSSProps = colorVariantPropInterpolation(whiteColorProp);
    const blackColorCSSProps = colorVariantPropInterpolation(blackColorProp);

    // assert
    expect(whiteColorCSSProps).toStrictEqual({ color: '#ffffff' });
    expect(blackColorCSSProps).toStrictEqual({ color: '#000000' });
  });
});

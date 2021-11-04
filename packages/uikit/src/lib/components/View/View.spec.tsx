import { render } from '@testing-library/react';
import React from 'react';
import { createView } from '.';
import { createUIKitConfig } from '../../utils/createUIKitConfig';

describe('View', () => {
  it('When passing children, draw it', () => {
    // arrange
    const config = createUIKitConfig({});
    const View = createView(config);
    const childrenString = `I'm View`;
    const { getByText } = render(<View>{childrenString}</View>);

    // assert
    expect(getByText(childrenString)).toBeTruthy();
  });

  it('When passing `button` to the `as` prop, render a button element', () => {
    // arrange
    const config = createUIKitConfig({});
    const View = createView(config);
    const asElement = 'button';
    const { container } = render(<View as={asElement}>I'm Button</View>);

    // assert
    expect(container.querySelector(asElement)).toBeTruthy();
  });

  it('When passing variant values, apply the corresponding styles', () => {
    // arrange
    const config = createUIKitConfig({
      colors: {
        red600: 'red',
        blue600: 'blue',
      },
      typography: {
        header: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        paragraph: {
          fontSize: 16,
          fontWeight: 'normal',
        },
      },
      space: {
        small: '4px',
        big: '16px',
      },
    });
    const View = createView(config);
    const { container } = render(
      <View
        backgroundColor="red600"
        color="blue600"
        typography="header"
        marginHorizontal="small"
        marginVertical="big"
      >
        View
      </View>
    );
    const viewElement = container.querySelector('div');

    // assert
    expect(viewElement?.style.backgroundColor).toBe('red');
    expect(viewElement?.style.color).toBe('blue');
    expect(viewElement?.style.fontSize).toBe('20px');
    expect(viewElement?.style.fontWeight).toBe('bold');
    expect(viewElement?.style.marginTop).toBe('16px');
    expect(viewElement?.style.marginBottom).toBe('16px');
    expect(viewElement?.style.marginLeft).toBe('4px');
    expect(viewElement?.style.marginRight).toBe('4px');
  });
});

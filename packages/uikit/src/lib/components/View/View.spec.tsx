import { render } from '@testing-library/react';
import React from 'react';
import { View } from './View';

describe('View', () => {
  it('When passing children, draw it', () => {
    // arrange
    const childrenString = `I'm View`;
    const { getByText } = render(<View>{childrenString}</View>);

    // assert
    expect(getByText(childrenString)).toBeTruthy();
  });

  it('When passing `button` to the `as` prop, render a button element', () => {
    // arrange
    const asElement = 'button';
    const { container } = render(<View as={asElement}>I'm Button</View>);

    // assert
    expect(container.querySelector(asElement)).toBeTruthy();
  });
});

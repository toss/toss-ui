import React from 'react';
import { createStyled, injectEmotionStylesGenerator } from '../../src';

const styled = createStyled({
  injectStylesGenerator: injectEmotionStylesGenerator,
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});

function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  // eslint-disable-next-line react/button-has-type
  return <button {...props} />;
}

export const ResponsiveButton1 = styled(Button, {
  border: 0,
  borderRadius: 12,
  fontWeight: 'bold',
  padding: '12px 16px',

  backgroundColor: 'blueviolet',
  color: 'white',
  '@sm': {
    backgroundColor: 'red',
  },
  '@md': {
    backgroundColor: 'yellow',
    color: 'black',
  },
  '@lg': {
    backgroundColor: 'green',
  },
});

export const ResponsiveButton2 = styled(Button, {
  border: 0,
  borderRadius: 12,
  fontSize: 12,
  fontWeight: 'bold',
  padding: '12px 16px',
  backgroundColor: 'blueviolet',
  color: 'white',

  variants: {
    font: {
      big: {
        fontSize: 18,
      },
      medium: {
        fontSize: 16,
      },
      small: {
        fontSize: 14,
      },
    },
  },
});

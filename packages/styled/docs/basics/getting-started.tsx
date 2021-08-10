import React from 'react';
import { createStyled } from '../../src';

const styled = createStyled();

function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  // eslint-disable-next-line react/button-has-type
  return <button {...props} />;
}

export const StyledButton = styled(Button, {
  backgroundColor: 'blueviolet',
  border: 0,
  borderRadius: 12,
  color: 'white',
  fontWeight: 'bold',
  padding: '12px 16px',
});

export const ColorableButton = styled(StyledButton, {
  variants: {
    appearance: {
      success: {
        backgroundColor: 'seagreen',
      },
      danger: {
        backgroundColor: 'hotpink',
      },
    },
  },
  defaultVariants: {
    appearance: 'success',
  },
});

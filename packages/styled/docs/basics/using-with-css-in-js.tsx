import React from 'react';
import { createStyled, injectEmotionStyles } from '../../src';

const styled = createStyled({ injectStyle: injectEmotionStyles });

function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
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

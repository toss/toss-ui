import React from 'react';
import {
  createStyled,
  injectEmotionStyles,
  injectStitchesStyles,
} from '../../src';

const styledWithEmotion = createStyled({ injectStyle: injectEmotionStyles });
const styledWithStitches = createStyled({ injectStyle: injectStitchesStyles });

function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return <button {...props} />;
}

export const EmotionButton = styledWithEmotion(Button, {
  backgroundColor: 'blueviolet',
  border: 0,
  borderRadius: 12,
  color: 'white',
  fontWeight: 'bold',
  padding: '12px 16px',
});

export const StitchesButton = styledWithStitches(Button, {
  backgroundColor: 'blueviolet',
  border: 0,
  borderRadius: 12,
  color: 'white',
  fontWeight: 'bold',
  padding: '12px 16px',
});

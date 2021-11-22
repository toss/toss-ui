import React from 'react';
import {
  createStyled,
  injectEmotionStylesGenerator,
  injectStitchesStylesGenerator,
} from '../../src';

const styledWithEmotion = createStyled({
  injectStylesGenerator: injectEmotionStylesGenerator,
});
const styledWithStitches = createStyled({
  injectStylesGenerator: injectStitchesStylesGenerator,
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

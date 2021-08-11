import { createText, createUIKitConfig } from '../../../src';

const config = createUIKitConfig({
  colors: {
    red600: 'red',
    blue600: 'blue',
  },
  typographys: {
    header: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: 16,
      fontWeight: 'normal',
    },
  },
});

export const Text = createText(config);

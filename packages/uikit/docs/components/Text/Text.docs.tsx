import { createText, createUIKitConfig } from '../../../src';

const config = createUIKitConfig({
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
});

export const Text = createText(config);

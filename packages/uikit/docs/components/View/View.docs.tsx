import { createUIKitConfig, createView } from '../../../src';

const config = createUIKitConfig({
  colors: {
    red600: 'red',
    blue600: 'blue',
  },
});

export const View = createView(config);

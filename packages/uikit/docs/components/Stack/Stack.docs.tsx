import { styled } from '@toss-ui/styled';
import { createStack, createUIKitConfig, createView } from '../../../src';

const config = createUIKitConfig({
  colors: {
    red600: 'red',
    blue600: 'blue',
  },
  space: {
    '2': 2,
    '4': 4,
    '6': 6,
    '8': 8,
  },
});

const View = createView(config);

export const RedView = styled(View, {
  backgroundColor: 'red',
  width: 100,
  height: 100,
});

RedView.displayName = 'RedView';

export const BlueView = styled(View, {
  backgroundColor: 'blue',
  width: 100,
  height: 100,
});

BlueView.displayName = 'BlueView';

export const Stack = createStack(config);

import { render } from '@testing-library/react';
import React from 'react';
import { createStack } from '.';
import { createUIKitConfig } from '../../utils/createUIKitConfig';

describe('View', () => {
  it('When passing flex properties, apply the corresponding styles', () => {
    // arrange
    const config = createUIKitConfig({});
    const Stack = createStack(config);
    const { container: horizontalStackContainer } = render(<Stack />);
    const horizontalStackElement =
      horizontalStackContainer.querySelector('div');
    const { container: verticalStackContainer } = render(
      <Stack direction="vertical" />
    );
    const verticalStackElement = verticalStackContainer.querySelector('div');

    // assert
    expect(horizontalStackElement?.style.flexDirection).toBe('row');
    expect(verticalStackElement?.style.flexDirection).toBe('column');
  });
});

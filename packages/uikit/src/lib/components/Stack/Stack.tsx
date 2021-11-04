import { styled } from '@toss-ui/styled';
import React, { ReactNode } from 'react';
import { forwardRef } from '../../../utils/forwardRef';
import { GlobalDOMAtrributes } from '../../types';
import { UIKitConfig } from '../../types/config';
import { flex } from '../../variants/flex';

export interface StackProps extends GlobalDOMAtrributes {
  /**
   * Children to be displayed in the Stack.
   */
  children?: ReactNode;
}

const StackComponent = forwardRef<StackProps, 'div'>(
  ({ as: ElementType = 'div', ...otherProps }, ref) => (
    <ElementType ref={ref} {...otherProps} />
  )
);

StackComponent.displayName = '_Stack';

// TODO: typing return type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStack<
  Color extends string | number,
  Typography extends string | number,
  Space extends string | number
>(config: UIKitConfig<Color, Typography, Space>) {
  const Stack = styled(StackComponent, {
    variants: {
      ...config,
      ...flex,
    },
  });
  Stack.displayName = 'Stack';

  return Stack;
}

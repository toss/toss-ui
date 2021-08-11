import { styled } from '@toss-ui/styled';
import React, { ReactNode } from 'react';
import { forwardRef } from '../../../utils/forwardRef';
import { GlobalDOMAtrributes } from '../../types';

export interface ViewProps extends GlobalDOMAtrributes {
  /**
   * Children to be displayed in the View.
   */
  children?: ReactNode;
}

const ViewComponent = forwardRef<ViewProps, 'div'>(
  ({ as: ElementType = 'div', ...otherProps }, ref) => (
    <ElementType ref={ref} {...otherProps} />
  )
);

export const View = styled(ViewComponent, {
  display: 'flex',
});

View.displayName = 'View';

import { styled } from '@toss-ui/styled';
import React, { ReactNode } from 'react';
import { GlobalDOMAtrributes } from '../../types/dom';
import { forwardRef } from '../../utils/forwardRef';

export interface ViewProps extends GlobalDOMAtrributes {
  /**
   * Children to be displayed in the View.
   */
  children?: ReactNode;
}

const _View = forwardRef<ViewProps, 'div'>(
  ({ as: ElementType = 'div', ...otherProps }, ref) => {
    return <ElementType ref={ref} {...otherProps} />;
  }
);

export const View = styled(_View, {
  display: 'flex',
});

View.displayName = 'View';

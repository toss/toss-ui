import React, { JSXElementConstructor, ReactNode } from 'react';
import { GlobalDOMAtrributes } from '../../types/dom';
import { forwardRef } from '../../utils/forwardRef';

export interface ViewProps extends GlobalDOMAtrributes {
  /**
   * The element to render as the node.
   */
  as?: string | JSXElementConstructor<any>;
  /**
   * Children to be displayed in the View.
   */
  children?: ReactNode;
}

export const View = forwardRef<ViewProps, 'div'>(
  ({ as: ElementType = 'div', ...otherProps }, ref) => {
    return <ElementType ref={ref} {...otherProps} />;
  }
);

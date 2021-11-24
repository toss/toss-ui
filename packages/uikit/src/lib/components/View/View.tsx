import { styled } from '@toss-ui/styled';
import React, { ReactNode } from 'react';
import { forwardRef } from '../../../utils/forwardRef';
import { GlobalDOMAtrributes } from '../../types';
import { UIKitConfig } from '../../types/config';

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

ViewComponent.displayName = '_View';

// TODO: typing return type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createView<
  Color extends string | number,
  Typography extends string | number,
  Space extends string | number
>({ variants }: UIKitConfig<Color, Typography, Space>) {
  const View = styled(ViewComponent, {
    variants,
  });
  View.displayName = 'View';

  return View;
}

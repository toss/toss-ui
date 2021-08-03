import * as React from 'react';
import { AsableComponent, AsableElementType, OverrideProps } from '../types';

export const forwardRef: <
  Props extends object,
  Component extends AsableElementType
>(
  component: React.ForwardRefRenderFunction<
    any,
    OverrideProps<React.ComponentProps<Component>, Props> & {
      as?: Component;
    }
  >
) => AsableComponent<Component, Props> = React.forwardRef as any;

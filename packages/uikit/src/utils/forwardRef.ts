import * as React from 'react';
import {
  AsableComponent,
  AsableElementType,
  AsableProps,
  OverrideProps,
} from '../types';

export const forwardRef: <
  Props extends object,
  Component extends AsableElementType = never
>(
  component: React.ForwardRefRenderFunction<
    any,
    OverrideProps<React.ComponentProps<Component>, Props> &
      Component extends never
      ? {}
      : AsableProps<Component>
  >
) => Component extends never ? Component : AsableComponent<Component, Props> =
  React.forwardRef as any;

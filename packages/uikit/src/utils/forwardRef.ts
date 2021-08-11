import React from 'react';
import {
  AsableComponent,
  AsableElementType,
  AsableProps,
  OverrideProps,
} from '../lib/types';

interface ForwardRefWithAs {
  <Props extends {}, Component extends AsableElementType = never>(
    component: React.ForwardRefRenderFunction<
      any, // eslint-disable-line @typescript-eslint/no-explicit-any
      OverrideProps<React.ComponentProps<Component>, Props> &
        Component extends never
        ? never
        : AsableProps<Component>
    >
  ): Component extends never ? Component : AsableComponent<Component, Props>;
}

export const forwardRef = React.forwardRef as ForwardRefWithAs;

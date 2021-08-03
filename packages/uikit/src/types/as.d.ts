import React from 'react';
import { OverrideProps } from './utils';

export type AsableElementType<Props = any> = React.ElementType<Props>;

export interface AsableProps<AsComponent extends AsableElementType> {
  as?: AsComponent;
}

export type AsableComponent<
  Component extends AsableElementType,
  Props extends AsableProps<Component> = {}
> = {
  <AsComponent extends AsableElementType>(
    props: OverrideProps<
      React.ComponentProps<Component>,
      OverrideProps<React.ComponentProps<AsComponent>, Props>
    > &
      AsableProps<AsComponent>
  ): React.ReactElement;
};

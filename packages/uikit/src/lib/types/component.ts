import { AsableComponent, AsableElementType, AsableProps } from './as';

export interface UIKitComponent<
  Component extends AsableElementType,
  Props extends AsableProps<Component> = {}
> extends AsableComponent<Component, Props> {
  displayName?: string;
}

import { styled } from '@toss-ui/styled';
import React, { ReactNode } from 'react';
import { forwardRef } from '../../../utils/forwardRef';
import { GlobalDOMAtrributes } from '../../types';
import { UIKitConfig } from '../../types/config';

export interface TextProps extends GlobalDOMAtrributes {
  /**
   * Children to be displayed in the Text.
   */
  children?: ReactNode;
}

const TextComponent = forwardRef<TextProps, 'span'>(
  ({ as: ElementType = 'span', ...otherProps }, ref) => (
    <ElementType ref={ref} {...otherProps} />
  )
);

TextComponent.displayName = '_Text';

// TODO: typing return type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createText<Color extends string, Typography extends string>(
  config: UIKitConfig<Color, Typography>
) {
  const { backgroundColor, color, typography } = config;
  const Text = styled(TextComponent, {
    variants: {
      backgroundColor,
      color,
      typography,
    },
  });
  Text.displayName = 'Text';

  return Text;
}

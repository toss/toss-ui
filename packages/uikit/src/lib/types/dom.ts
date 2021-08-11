import { AriaAttributes, CSSProperties } from 'react';

export interface StandardHTMLAttributes {
  accessKey?: string;
  className?: string;
  contentEditable?: boolean | 'inherit';
  contextMenu?: string;
  dir?: string;
  draggable?: boolean;
  hidden?: boolean;
  id?: string;
  lang?: string;
  placeholder?: string;
  slot?: string;
  spellCheck?: boolean;
  style?: CSSProperties;
  tabIndex?: number;
  title?: string;
  translate?: 'yes' | 'no';
}

export interface GlobalDOMAtrributes
  extends StandardHTMLAttributes,
    AriaAttributes {}

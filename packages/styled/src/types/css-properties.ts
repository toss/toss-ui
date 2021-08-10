import type CSS from 'csstype';

// eslint-disable-next-line no-use-before-define
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };
export type CSSProperties = CSS.PropertiesFallback<number | string>;
export type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]:
    | CSSProperties[K]
    | Extract<CSSProperties[K], string>[];
};

export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudos {}

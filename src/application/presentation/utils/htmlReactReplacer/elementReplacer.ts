import { Element, HTMLReactParserOptions } from 'html-react-parser';
import { ReactElement } from 'react';

export type ElementReplacer = (htmlElement: Element, options?: HTMLReactParserOptions) => ReactElement | null;

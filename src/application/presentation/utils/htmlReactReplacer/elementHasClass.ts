import { Element } from 'html-react-parser';

export default function elementHasClass({ attribs }: Element, nodeClass: string): boolean {
  return !!attribs.class && attribs.class.indexOf(nodeClass) !== -1;
}

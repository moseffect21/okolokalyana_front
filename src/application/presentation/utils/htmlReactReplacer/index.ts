import HTMLReactParser, { DOMNode, Element } from 'html-react-parser';

import { ElementReplacer } from './elementReplacer';
import elementHasClass from './elementHasClass';

/**
 * Парсит строку с HTML кодом в React элементы, дополнительно можно заменить нужные ноды кастомными компонентами.
 * Использует пакет html-react-parser
 *
 * Пример реализации
 * export default function replaceQuestionHistory(node: Element) {
 *   let replacement = null;
 *
 *   if (hasClass(node, 'inline_question_history')) {
 *     const questionHistoryLinks = node.children.filter((child) => {
 *       return child instanceof Element && child.name === 'a';
 *     }).map((child) => {
 *       const { attribs, children: childNodes } = (child as Element);
 *       const textNode = (childNodes.length) ? childNodes[0] : null;
 *       const linkTitle = (textNode && textNode.type === 'text') ? (textNode as Text).data : '';
 *
 *       return {
 *         href: attribs.href,
 *         title: linkTitle
 *       };
 *     });
 *
 *     replacement = <QuestionHistory links={questionHistoryLinks} />;
 *   }
 *
 *   return replacement;
 * };
 */
function HTMLReactReplacer(contentHtml: string, replacers: ElementReplacer[]): ReturnType<typeof HTMLReactParser> {
  const parseOptions = {
    replace: (domNode: DOMNode) => {
      let replacement = null;

      if (domNode instanceof Element) {
        for (let i = 0; i < replacers.length; i++) {
          replacement = replacers[i](domNode, parseOptions);
          if (replacement) {
            break;
          }
        }
      }

      return replacement;
    },
  };

  return HTMLReactParser(contentHtml, parseOptions);
}

export { HTMLReactReplacer, elementHasClass };
export type { ElementReplacer };

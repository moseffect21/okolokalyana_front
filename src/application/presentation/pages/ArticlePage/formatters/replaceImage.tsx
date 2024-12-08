import { ElementReplacer } from 'application/presentation/utils/htmlReactReplacer'
import { Element } from 'html-react-parser'
import Image from 'next/image'

const replaceImage: ElementReplacer = (node: Element) => {
  let replacement = null

  if (node.name === 'img' && node.attribs?.src) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    replacement = <Image src={node.attribs?.src} width={1080} height={540} alt="" />
  }

  return replacement
}

export default replaceImage

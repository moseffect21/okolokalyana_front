import React from 'react'
import Link from 'next/link'
import LinkSvg from 'images/icons/gray_right_arrow.svg'
import s from './Containers.module.scss'
import { HookahBlock } from 'application/domain/entities/hookah/HookahBlock'
import Cards from 'application/presentation/components/uiComponents/Cards'

type HookahBlocksContainerProps = {
  hookahBlocks: HookahBlock[]
  total: number
}

const HookahBlocksContainer = ({ hookahBlocks, total }: HookahBlocksContainerProps) => {
  const totalCount = total - hookahBlocks.length
  return (
    <div className={s.container}>
      <div className={s.title}>Калауд</div>
      <Cards data={hookahBlocks} cardLinkPrefix="/smokingroom/list?hookah_block=" />
      <Link className={s.show_more} href="/smokingroom#hookah_blocks">
        Показать еще {totalCount || null}
        <LinkSvg />
      </Link>
    </div>
  )
}

export default HookahBlocksContainer

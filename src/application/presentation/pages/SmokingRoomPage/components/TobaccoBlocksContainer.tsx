import React from 'react'
import Link from 'next/link'
import LinkSvg from 'images/icons/gray_right_arrow.svg'
import s from './Containers.module.scss'
import { HookahBlock } from 'application/domain/entities/hookah/HookahBlock'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'

type HookahBlockItemProps = {
  hookahBlock: HookahBlock
}

const HookahBlockItem = ({ hookahBlock }: HookahBlockItemProps) => {
  return (
    <Link
      className={s.bowl}
      href={`/showroom/list?hookah_block=${hookahBlock.slug || hookahBlock.id}`}
    >
      <div className={s.photo_container}>
        <StoredImage
          src={hookahBlock.photo || ''}
          alt=""
          width={200}
          height={200}
          className={s.photo}
        />
      </div>
      <div className={s.name}>
        <div>{hookahBlock.name}</div>
      </div>
    </Link>
  )
}

type HookahBlocksContainerProps = {
  hookahBlocks: HookahBlock[]
  total: number
}

const HookahBlocksContainer = ({ hookahBlocks, total }: HookahBlocksContainerProps) => {
  const totalCount = total - hookahBlocks.length
  return (
    <div className={s.container}>
      <div className={s.title}>Калауд</div>
      <div className={s.bowls}>
        {hookahBlocks.map(hookahBlock => (
          <HookahBlockItem key={`hookah_block_${hookahBlock.id}`} hookahBlock={hookahBlock} />
        ))}
      </div>
      <Link className={s.show_more} href="/smokingroom#tobacco_blocks">
        Показать еще {totalCount || null}
        <LinkSvg />
      </Link>
    </div>
  )
}

export default HookahBlocksContainer

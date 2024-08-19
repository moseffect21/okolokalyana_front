import { TeamMember as TeamMemberType } from 'application/domain/entities/team/TeamMember'
import React from 'react'
import s from './TeamMember.module.scss'
import BlogerSvg from 'images/BLOGER.svg'
import EditorSvg from 'images/editor.svg'
import Link from 'next/link'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'
import cn from 'classnames'

type TeamMemberProps = {
  data: TeamMemberType
  hovered: boolean
  setHovered: (val: boolean) => void
}

const TeamMember: React.FC<TeamMemberProps> = ({ data, hovered, setHovered }) => {
  const roleIcon = data.id === 4 ? <BlogerSvg /> : <EditorSvg />
  return (
    <Link
      className={cn(s.container, { [s.hovered]: hovered })}
      href={`/about/${data.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={s.content}>
        <StoredImage src={data.photo} className={s.photo} alt="" width={315} height={378} />
        <div className={s.name}>{data.name}</div>
        <div className={s.role}>{roleIcon}</div>
      </div>
      <div className={s.shadow} />
    </Link>
  )
}

export default TeamMember

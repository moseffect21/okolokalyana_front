import React, { useState } from 'react'
import s from './AboutMain.module.scss'
import { Team } from 'application/domain/entities/team/Team'
import TeamMember from 'application/presentation/pages/AboutPage/components/TeamMember'
import ShowMoreLink from 'application/presentation/components/uiComponents/ShowMoreLink'

type AboutMainProps = {
  team: Team
}

const AboutMain = ({ team }: AboutMainProps) => {
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <section className={s.container}>
      <div className={s.aboutInner}>
        <div className={s.titleText}>O нас</div>
        <div className={s.aboutContainer}>
          {team.map(item => (
            <TeamMember
              key={`team_member_${item.id}`}
              data={item}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
        <ShowMoreLink href='/about' color='white'/>
      </div>
    </section>
  )
}

export default AboutMain

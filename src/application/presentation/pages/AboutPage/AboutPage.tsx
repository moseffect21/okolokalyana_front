import React, { useState } from 'react'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import { MetaAboutPage } from 'application/presentation/meta/MetaContent'
import TeamMember from './components/TeamMember'
import s from './AboutPage.module.scss'
import { Team } from 'application/domain/entities/team/Team'
import minifyObject from 'application/domain/utils/minifyObject'
import { fetchTeam } from 'application/domain/useCases/team/getTeam'

export const getAboutPageServerSideProps = async ({}: GetServerSideDefaultProps) => {
  try {
    const team = await fetchTeam()
    const keys = ['id', 'photo', 'name']
    return {
      props: {
        team: team?.map(item => minifyObject(item, keys)),
      },
    }
  } catch (e) {
    return {
      props: {},
    }
  }
}

type AboutPageProps = {
  team: Team
}

export default function AboutPage({ team }: AboutPageProps) {
  const breadCrumbs = [{ id: 1, name: 'О нас', link: '/about' }]
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <>
      <MetaAboutPage />
      <PageLayout breadCrumbs={breadCrumbs} title={'О нас'}>
        <div className={s.container}>
          {team.map(item => (
            <TeamMember
              key={`team_member_${item.id}`}
              data={item}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </PageLayout>
    </>
  )
}

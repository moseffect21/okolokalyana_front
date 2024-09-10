import { TeamMember } from 'application/domain/entities/team/TeamMember'
import { GetServerSideDefaultProps } from 'application/domain/types/ServerSideProps'
import PageLayout from 'application/presentation/components/Layouts/PageLayout'
import React from 'react'
import s from './TeamMemberPage.module.scss'
import StoredImage from 'application/presentation/components/uiComponents/StoredImage'
import Link from 'next/link'
import VkSvg from 'images/icons/vk.svg'
import InstSvg from 'images/icons/inst.svg'
import YoutubeSvg from 'images/icons/youtube.svg'
import TgSvg from 'images/icons/tg.svg'
import { MetaTeamMemberPage } from 'application/presentation/meta/MetaContent'
import { fetchTeamMember } from 'application/domain/useCases/team/getTeam'

export const getTeamMemberPageServerSideProps = async ({ params }: GetServerSideDefaultProps) => {
  try {
    const userId = parseInt(params?.id as string)
    const teamMember = await fetchTeamMember(userId)
    return {
      props: {
        teamMember,
      },
    }
  } catch (e) {
    return {
      props: {},
    }
  }
}

type TeamMemberProps = {
  teamMember: TeamMember
}

export default function TeamMemberPage({ teamMember }: TeamMemberProps) {
  return (
    <>
      <MetaTeamMemberPage
        name={teamMember.name}
        desc={`${teamMember.little_desc} ${teamMember.description}`}
      />
      <PageLayout
        breadCrumbs={[
          { id: 1, name: 'О нас', link: '/about' },
          { id: 2, name: teamMember.name },
        ]}
        withBackButton
      >
        <div className={s.container}>
          <div className={s.left}>
            <div className={s.image_content}>
              <StoredImage
                src={teamMember.photo}
                className={s.photo}
                alt=""
                width={315}
                height={378}
              />
            </div>
            <div className={s.social}>
              {!!teamMember.vk_url && (
                <Link href={teamMember.vk_url}>
                  <VkSvg />
                </Link>
              )}
              {!!teamMember.tg_url && (
                <Link href={teamMember.tg_url}>
                  <TgSvg />
                </Link>
              )}
              {!!teamMember.inst_url && (
                <Link href={teamMember.inst_url}>
                  <InstSvg />
                </Link>
              )}
              {!!teamMember.youtube_url && (
                <Link href={teamMember.youtube_url}>
                  <YoutubeSvg />
                </Link>
              )}
            </div>
          </div>

          <div className={s.right}>
            <div className={s.name}>{teamMember.name}</div>
            <div className={s.little_desc}>{teamMember.little_desc}</div>
            {!!teamMember.description && (
              <div className={s.txt} dangerouslySetInnerHTML={{ __html: teamMember.description }} />
            )}
          </div>
        </div>
      </PageLayout>
    </>
  )
}

import { TeamMember } from 'application/domain/entities/team/TeamMember'
import apiClient from '../apiClient'
import { Team } from 'application/domain/entities/team/Team'

export const fetchTeam = async (): Promise<Team | undefined> => {
  const { data } = await apiClient.get('/api/v1/team')
  return data
}

export const fetchTeamMember = async (id: number): Promise<TeamMember | undefined> => {
  const { data } = await apiClient.get('/api/v1/team')
  return data ? data.find((item: TeamMember) => item.id === id) : undefined
}

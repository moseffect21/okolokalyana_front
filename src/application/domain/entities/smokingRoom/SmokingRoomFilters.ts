import { Bowl } from '../bowl/Bowl'
import { HookahBlock } from '../hookah/HookahBlock'
import { Tobacco } from '../tobacco/Tobacco'
import { User } from '../user/User'

export type SmokingRoomFilters = {
  bowls: Bowl[]
  bowls_count: number
  hookah_block: HookahBlock[]
  hookah_blocks_count: number
  objective_rating: number[]
  subjective_rating: number[]
  smokers: User[]
  tobaccos: Tobacco[]
}

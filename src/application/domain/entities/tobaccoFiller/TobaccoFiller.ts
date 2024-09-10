import { Bowl } from '../bowl/Bowl'
import { Brand } from '../brand/Brand'
import { Coal } from '../coal/Coal'
import { CoalPlacement } from '../coal/CoalPlacement'
import { Hookah } from '../hookah/Hookah'
import { HookahBlock } from '../hookah/HookahBlock'
import { Tobacco } from '../tobacco/Tobacco'
import { User } from '../user/User'

export type TobaccoFiller = {
  id: number
  slug: string
  created_at: string
  updated_at: string
  brand_id: number
  tobacco_line: string
  aroma: string
  bowl_id: number
  gram: string
  hookah_block_id: number
  coal_id: number
  coal_placement_id: number
  hookah_id: number
  aroma_rating: number
  subjective_rating: number
  objective_rating: number
  users_rating: number
  warming_time: string
  description: string
  content: string
  name: string
  photo: string | null
  video_url: string | null
  smoker_id: number
  tobacco_id: number
  brand: Brand
  bowl: Bowl | null
  hookah_block: HookahBlock | null
  coal_placement: CoalPlacement | null
  coal: Coal | null
  hookah: Hookah | null
  smoker: User | null
  tobacco: Tobacco | null
}

import { ExtractPropTypes } from 'vue'
import { createStringProp } from '../utils'

export type PositonProps = 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'

export const badgeProps = {
  content: createStringProp(''),
  backgroundColor: createStringProp(''),
  color: createStringProp(''),
  position: createStringProp<PositonProps>('right-top')
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
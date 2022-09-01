import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createNumericProp, createStringProp } from '../utils'

export type TagType = 'primary' | 'emphasize' | 'info' | 'warning' | 'danger'

export const tagProps = {
  show: createBooleanProp(true),
  type: createStringProp<TagType>('primary'),
  size: createNumericProp(12),
  plain: createBooleanProp(false),
  round: createBooleanProp(false),
  mark: createBooleanProp(false),
  backgroundColor: String,
  color: String,
  closeable: createBooleanProp(false)
}

export type TagProps = ExtractPropTypes<typeof tagProps>
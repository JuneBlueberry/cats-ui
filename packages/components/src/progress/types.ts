import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createNumericProp } from '../utils'

export const progressProps = {
  percentage: createNumericProp(0),
  color: String,
  size: [Number, String],
  round: createBooleanProp(false)
}

export type ProgressProps = ExtractPropTypes<typeof progressProps>
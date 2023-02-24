import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createNumericProp, createStringProp } from '../utils'

export const sliderProps = {
  modelValue: createNumericProp(0),
  min: createNumericProp(0),
  max: createNumericProp(100),
  color: String,
  size: [Number, String],
}

export type SliderProps = ExtractPropTypes<typeof sliderProps>
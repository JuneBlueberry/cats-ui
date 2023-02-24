import { ExtractPropTypes, PropType } from 'vue'
import { createArrayProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export const radioGroupProps = {
  modelValue: [String, Number]
}

export const radioProps = {
  name: [String, Number],
  disabled: createBooleanProp(false),
  color: createStringProp('#07c160')
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioProps = ExtractPropTypes<typeof radioProps>
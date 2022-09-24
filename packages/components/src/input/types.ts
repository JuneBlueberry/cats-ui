import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createNumericProp, createStringProp } from '../utils'


export const inputProps = {
  modelValue: [String, Number],
  label: String,
  placeholder: String
}

export type InputProps = ExtractPropTypes<typeof inputProps>
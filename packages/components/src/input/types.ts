import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createNumericProp, createStringProp } from '../utils'

type AutocompleteProp = 'on' | 'off'

export const inputProps = {
  modelValue: [String, Number],
  label: String,
  type: createStringProp('text'),
  placeholder: String,
  autocomplete: createStringProp<AutocompleteProp>('on')
}

export type InputProps = ExtractPropTypes<typeof inputProps>
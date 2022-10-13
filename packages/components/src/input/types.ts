import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createNumericProp, createStringProp } from '../utils'

type AutocompleteProp = 'on' | 'off'

export const inputProps = {
  modelValue: [String, Number],
  title: String,
  label: String,
  leftIcon: createStringProp(''),
  rightIcon: createStringProp(''),
  type: createStringProp('text'),
  placeholder: String,
  autocomplete: createStringProp<AutocompleteProp>('on'),
  clearable: createBooleanProp(false),
  readonly: createBooleanProp(false),
  disabled: createBooleanProp(false)
}

export type InputProps = ExtractPropTypes<typeof inputProps>
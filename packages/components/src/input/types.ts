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
  name: String,
  placeholder: String,
  autocomplete: createStringProp<AutocompleteProp>('on'),
  clearable: createBooleanProp(false),
  readonly: createBooleanProp(false),
  disabled: createBooleanProp(false),
  isTextarea: createBooleanProp(false),
  rows: createNumericProp(3),
  maxlength: Number,
  isShowNums: createBooleanProp(true)
}

export type InputProps = ExtractPropTypes<typeof inputProps>
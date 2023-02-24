import { ExtractPropTypes } from 'vue'
import { createArrayProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export const checkboxGroupProps = {
  modelValue: createArrayProp<String | Number>(),
  max: createNumericProp(0)
}

export const checkboxProps = {
  modelValue: createBooleanProp(false),
  name: [Number, String],
  disabled: createBooleanProp(false),
  square: createBooleanProp(false),
  opposite: createBooleanProp(false),
  color: createStringProp('#07c160')
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
import { ExtractPropTypes, PropType } from 'vue'
import { createArrayProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export type Actions = {
  key?: String | Number,
  title?: String,
  label?: String
}

export const pickerProps = {
  title: String,
  actions: createArrayProp<Actions>(),
}

export type PickerProps = ExtractPropTypes<typeof pickerProps>
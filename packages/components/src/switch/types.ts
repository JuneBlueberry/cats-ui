import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createStringProp } from '../utils'

export const switchProps = {
  modelValue: createBooleanProp(false),
  disabled: createBooleanProp(false),
  activeColor: createStringProp('#07c160'),
  inactiveColor: createStringProp('rgba(0, 0, 0, 0.1)'),
  loading: createBooleanProp(false),
  loadingColor: createStringProp('#07c160'),
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>
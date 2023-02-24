import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createNumericProp, createStringProp } from '../utils'


export const rateProps = {
  modelValue: createNumericProp(0),
  max: createNumericProp(5),
  activeIcon: createStringProp('star'),
  inactiveIcon: createStringProp('star-fill'),
  activeColor: createStringProp('#07c160'),
  inactiveColor: createStringProp('rgba(0,0,0,0.3)'),
  disabled: createBooleanProp(false),
  readonly: createBooleanProp(false)
}

export type RateProps = ExtractPropTypes<typeof rateProps>
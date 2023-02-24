import { ExtractPropTypes, PropType } from 'vue'
import { createBooleanProp, createStringProp, createNumericProp } from '../utils'

export type TopTipsType = 'primary' | 'emphasize' | 'info' | 'warning' | 'danger'
export type TopTipsAnimation = 'fade' | 'slide'

export const topTipsProps = {
  show: createBooleanProp(false),
  title: createStringProp(''),
  type: createStringProp<TopTipsType>('primary'),
  duration: createNumericProp(0),
  animation: createStringProp<TopTipsAnimation>('fade')
}

export type TopTipsProps = {
  show?: Boolean,
  title: String,
  type?: TopTipsType,
  duration?: Number,
  animation?: TopTipsAnimation
}
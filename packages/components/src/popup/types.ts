import { overlayCommonProps } from '../utils/props'
import { extend } from '../utils/shared'
import { ExtractPropTypes, PropType } from 'vue'
import { createObjectProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export type PositionProps = 'bottom' | 'top' | 'left' | 'right'

export const popupProps = extend({}, {
  // 方向
  position: createStringProp<PositionProps>('bottom'),
  // 宽度or长度 百分比
  size: createNumericProp(30),
  // 是否圆角
  round: createBooleanProp(true),
}, overlayCommonProps)

export type PopupProps = ExtractPropTypes<typeof popupProps>
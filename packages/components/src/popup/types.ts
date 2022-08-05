import { ExtractPropTypes, PropType } from 'vue'
import { createObjectProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export type PositionProps = 'bottom' | 'top' | 'left' | 'right'

export const overlayPopup = {
  show: createBooleanProp(false),
  // 方向
  position: createStringProp<PositionProps>('bottom'),
  // 宽度or长度 百分比
  size: createNumericProp(30),
  // 动画时间
  duration: createNumericProp(300),
  // 是否圆角
  round: createBooleanProp(true),
  // 自定义遮罩层class
  overlayClass: createStringProp(''),
  // 自定义遮罩层样式
  overlayStyle: createObjectProp()
}

export type OverlayPopup = ExtractPropTypes<typeof overlayPopup>
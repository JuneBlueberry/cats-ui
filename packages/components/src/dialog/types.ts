import { ExtractPropTypes, PropType } from 'vue'
import { createObjectProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export type PositionProps = 'bottom' | 'top' | 'left' | 'right'

export const dialogPopup = {
  show: createBooleanProp(false),
  // 动画时间
  duration: createNumericProp(300),
  // 自定义遮罩层class
  overlayClass: createStringProp(''),
  // 自定义遮罩层样式
  overlayStyle: createObjectProp()
}

export type DialogPopup = ExtractPropTypes<typeof dialogPopup>
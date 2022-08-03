import { ExtractPropTypes } from 'vue'
import { createObjectProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export const overlayProps = {
  show: createBooleanProp(false),
  // 动画时间
  duration: createNumericProp(300),
  customClass: createStringProp(''),
  customStyle: createObjectProp()
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
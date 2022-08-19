import { overlayCommonProps, OverlayCommonProps } from '../utils/props'
import { extend } from '../utils/shared'
import { createObjectProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export const dialogProps = extend({}, {
  title: createStringProp('标题'),
  content: createStringProp('这是一条平平无奇的弹窗内容'),
  showTitle: createBooleanProp(true),
  showConfirm: createBooleanProp(true),
  showCancel: createBooleanProp(true),
  confrimText: createStringProp('确定'),
  cancelText: createStringProp('取消'),
  confrimColor: createStringProp(''),
  cancelColor: createStringProp(''),
  closeClickOverlay: createBooleanProp(true),
}, overlayCommonProps)

export type DialogProps = {
  title?: String,
  content?: String,
  showTitle?: Boolean,
  showConfirm?: Boolean,
  showCancel?: Boolean,
  confrimText?: String,
  cancelText?: String,
  confrimColor?: String,
  cancelColor?: String,
  closeClickOverlay?: Boolean,
  onCancel?: Function,
  clickConfirm?: Function
} & OverlayCommonProps
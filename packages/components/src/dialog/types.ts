import { ExtractPropTypes, PropType } from 'vue'
import { createObjectProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export type PositionProps = 'bottom' | 'top' | 'left' | 'right'

export const dialogPopup = {
  show: createBooleanProp(false),
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
  duration: createNumericProp(300),
  overlayClass: createStringProp(''),
  overlayStyle: createObjectProp(),
}

export type DialogPopup = {
  show?: Boolean
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
  duration?: String | Number,
  overlayClass?: String,
  overlayStyle?: Object,
  onCancel?: Function,
  clickConfirm?: Function
}
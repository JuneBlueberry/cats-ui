import { createBooleanProp, createNumericProp, createStringProp, createObjectProp } from './create'

export const overlayCommonProps = {
  show: createBooleanProp(false),
  duration: createNumericProp(300),
  overlayClass: createStringProp(''),
  overlayStyle: createObjectProp()
}

export type OverlayCommonProps = {
  show?: Boolean
  duration?: String | Number,
  overlayClass?: String,
  overlayStyle?: Object,
}
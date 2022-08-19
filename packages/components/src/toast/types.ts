import { createBooleanProp, createNumericProp, createStringProp } from '../utils'

export type IconProps = 'success' | 'warning' | 'error' | 'loading' | 'none'

export const toastProps = {
  show: createBooleanProp(false),
  title: createStringProp(''),
  icon: createStringProp<IconProps>('success'),
  mask: createBooleanProp(true),
  duration: createNumericProp(1500),
}

export type ToastProps = {
  show?: Boolean
  title?: String,
  icon?: String,
  mask?: Boolean,
  duration?: Number
}
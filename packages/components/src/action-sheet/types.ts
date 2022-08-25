import { overlayCommonProps } from '../utils/props'
import { extend } from '../utils/shared'
import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createStringProp, createArrayProp } from '../utils'

export type Actions = {
  name: String,
  key?: String | Number
  color?: String,
  loading?: Boolean,
  disabled?: Boolean,
  callback?: Function
}

export const actionSheetProps = extend({}, {
  title: createStringProp(''),
  actions: createArrayProp<Actions>(),
  showCancel: createBooleanProp(false),
  cancelText: createStringProp('取消'),
  cancelColor: createStringProp('')
}, overlayCommonProps)

export type ActionSheetProps = ExtractPropTypes<typeof actionSheetProps>
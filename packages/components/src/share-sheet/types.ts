import { overlayCommonProps } from '../utils/props'
import { extend } from '../utils/shared'
import { ExtractPropTypes, PropType } from 'vue'
import { createBooleanProp, createStringProp, createArrayProp } from '../utils'

type iconType = 'QQ' | 'wechat' | 'enterprise-wechat' | 'QQ-space' | 'weibo' | 'friends'

export type Actions = {
  key?: String | Number,
  type?: PropType<iconType>,
  name?: String,
  image?: String,
  icon?: String,
  color?: String,
  callback?: Function
}

export type ActionsArray = Actions | Actions[]

export const shareSheetProps = extend({}, {
  title: createStringProp(''),
  actions: createArrayProp<ActionsArray>(),
  showCancel: createBooleanProp(true),
  cancelText: createStringProp('取消'),
  cancelColor: createStringProp('')
}, overlayCommonProps)

export type ShareSheetProps = ExtractPropTypes<typeof shareSheetProps>
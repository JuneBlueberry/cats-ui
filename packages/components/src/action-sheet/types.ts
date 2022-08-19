import { overlayCommonProps } from '../utils/props'
import { extend } from '../utils/shared'
import { ExtractPropTypes } from 'vue'
import { createObjectProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export const actionSheetProps = extend({}, {
  list: Array
}, overlayCommonProps)

export type ActionSheetProps = ExtractPropTypes<typeof actionSheetProps>
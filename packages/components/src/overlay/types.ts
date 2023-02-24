import { overlayCommonProps } from '../utils/props'
import { extend } from '../utils/shared'
import { ExtractPropTypes } from 'vue'

export const overlayProps = extend({}, overlayCommonProps)

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
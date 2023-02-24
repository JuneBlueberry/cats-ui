import { ExtractPropTypes } from 'vue'
import { createNumericProp, createStringProp } from '../utils'

export const watermarkProps = {
  content: String,
  image: String,
  width: createNumericProp(120),
  height: createNumericProp(64),
  fontSize: createNumericProp(24),
  color: createStringProp('color: rgba(0, 0, 0, 0.15)'),
  imageWidth: createNumericProp(120),
  imageHeight: createNumericProp(64),
  right: createNumericProp(20),
  bottom: createNumericProp(20),
  top: createNumericProp(0),
  left: createNumericProp(0),
  spacingX: createNumericProp(24),
  spacingY: createNumericProp(48)
}

export type WatermarkProps = ExtractPropTypes<typeof watermarkProps>
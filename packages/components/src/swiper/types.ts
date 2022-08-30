import { ExtractPropTypes } from 'vue'
import { createArrayProp, createBooleanProp, createNumericProp } from '../utils'

export const swiperProps = {
  imgList: createArrayProp(),
  active: createNumericProp(0),
  auto: createBooleanProp(false),
  loop: createBooleanProp(false),
  interval: createNumericProp(3000),
  threshold: createNumericProp(50),
  showShadow: createBooleanProp(false)
}

export type SwiperProps = ExtractPropTypes<typeof swiperProps>
import { ExtractPropTypes } from 'vue'
import { createArrayProp, createBooleanProp, createNumericProp } from '../utils'

export const swiperProps = {
  imgList: createArrayProp(),
  active: createNumericProp(0),
  height: [String, Number],
  auto: createBooleanProp(false),
  loop: createBooleanProp(false),
  interval: createNumericProp(3000),
  threshold: createNumericProp(50),
  showSubscript: createBooleanProp(true),
  showShadow: createBooleanProp(false)
}

export const swiperItemProps = {

}

export type SwiperProps = ExtractPropTypes<typeof swiperProps>
export type SwiperItemProps = ExtractPropTypes<typeof swiperItemProps>
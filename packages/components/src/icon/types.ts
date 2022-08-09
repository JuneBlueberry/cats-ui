import { ExtractPropTypes, PropType } from 'vue'
import { createBooleanProp, createNumericProp, createStringProp } from '../utils'


export const iconProps = {
  name: createStringProp(''),
  // 字体颜色
  color: createStringProp(''),
  // 字体大小
  size: {
    type: [Number, String]
  },
  // 是否显示小红点
  dot: createBooleanProp(false),
  // 徽章的内容
  badge: createStringProp('')
}

export type IconProps = ExtractPropTypes<typeof iconProps>
import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createStringProp, createArrayProp } from '../utils'


export const footerProps = {
  // 字体颜色
  color: createStringProp(''),
  // 底部文字
  title: createStringProp(''),
  // 底部链接
  links: createArrayProp(),
  // 是否置底
  bottom: createBooleanProp(false),
}

export type FooterProps = ExtractPropTypes<typeof footerProps>

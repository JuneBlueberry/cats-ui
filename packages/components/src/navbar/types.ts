import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createStringProp } from '../utils'


export const navbarProps = {
  // 背景颜色
  backgroundColor: createStringProp(''),
  // 字体颜色
  color: createStringProp(''),
  // 是否展示左边的图标
  showLeft: createBooleanProp(false),
  // 是否展示右边的图标
  showRight: createBooleanProp(false)
}

export type NavbarProps = ExtractPropTypes<typeof navbarProps>
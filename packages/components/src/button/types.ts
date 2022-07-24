import { ExtractPropTypes } from 'vue'

export const ButtonShape = ['primary', 'secondary', 'block']
export const ButtonType = ['primary', 'emphasize', 'info', 'warning', 'danger']
export const ButtonSize = ['large', 'normal', 'small', 'mini'];  // TODO: 暂不实现

export const buttonProps = {
  // 按钮形状
  shape: {
    type: String,
    default: 'primary',
    values: ButtonShape
  },
  // 按钮类型
  type: {
    type: String,
    default: 'primary',
    values: ButtonType
  },
  // 禁止按钮
  disable: {
    type: Boolean,
    default: false
  },
  // mini按钮
  mini: {
    type: Boolean,
    default: false
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
import { ExtractPropTypes } from 'vue'

// 按钮形状
export const ButtonShape = ['primary', 'secondary', 'block', 'mini']
// 按钮类型
export const ButtonType = ['primary', 'info', 'warning', 'danger']
// 按钮大小
export const ButtonSize = ['large', 'normal', 'small', 'mini'];

export const buttonProps = {
  shape: {
    type: String,
    default: 'primary',
    values: ButtonShape
  },
  type: {
    type: String,
    default: 'primary',
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
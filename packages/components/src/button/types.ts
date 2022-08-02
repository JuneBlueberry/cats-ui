import { ExtractPropTypes } from 'vue'
import { createStringProp, createBooleanProp } from '../utils';

export type ButtonShape = 'primary' | 'secondary' | 'block'
export type ButtonType = 'primary' | 'emphasize' | 'info' | 'warning' | 'danger'
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'  // TODO: 暂不实现

export const buttonProps = {
  // 按钮形状
  shape: createStringProp<ButtonShape>('primary'),
  // 按钮类型
  type: createStringProp<ButtonType>('primary'),
  // 禁止按钮
  disable: createBooleanProp(false),
  // mini按钮
  mini: createBooleanProp(false)
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
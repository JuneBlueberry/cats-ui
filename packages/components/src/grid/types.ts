import { ExtractPropTypes } from 'vue'
import { createStringProp, createBooleanProp } from '../utils';

// export type GridShape = 'primary' | 'secondary' | 'block'
// export type GridType = 'primary' | 'emphasize' | 'info' | 'warning' | 'danger'
// export type GridSize = 'large' | 'normal' | 'small' | 'mini'  // TODO: 暂不实现

export const gridProps = {
  // 按钮形状
  // shape: createStringProp<GridShape>('primary'),
  // // 按钮类型
  // type: createStringProp<GridType>('primary'),
  // // 禁止按钮
  // disabled: createBooleanProp(false),
  // // mini按钮
  // mini: createBooleanProp(false)
}

export type GridProps = ExtractPropTypes<typeof gridProps>
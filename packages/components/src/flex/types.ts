import { ExtractPropTypes, PropType } from 'vue'
import { createBooleanProp, createNumericProp } from '../utils'

export type RowJustify = 'start' | 'end' | 'center' | 'space-between' | 'space-around'

export type RowAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

export const rowProps = {
  // 栅格间距
  gutter: createNumericProp(0),
  // 主轴对齐方式
  justify: String as PropType<RowJustify>,
  // 交叉轴对齐方式
  align: String as PropType<RowAlign>,
  // 是否换行
  wrap: createBooleanProp(false)
}

export const colProps = {
  // 栅格份数
  span: createNumericProp(0)
}

export type RowProps = ExtractPropTypes<typeof rowProps>
export type ColProps = ExtractPropTypes<typeof colProps>
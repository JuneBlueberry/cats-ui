import { ExtractPropTypes, PropType } from 'vue'
import { createBooleanProp, createNumericProp, createStringProp } from '../utils'

export const cellProps = {
  title: String,
  value: String,
  label: String,
  icon: createStringProp(''),
  showLink: createBooleanProp(false)
}

export const cellGroupProps = {
  card: createBooleanProp(false)
}

export type CellProps = ExtractPropTypes<typeof cellProps>
export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>
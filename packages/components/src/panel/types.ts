import { ExtractPropTypes, PropType } from 'vue'
import { createArrayProp, createBooleanProp, createNumericProp, createStringProp } from '../utils'

export type Actions = {
  key?: String | Number,
  title?: String,
  image?: String,
  label?: String,
  icon?: String,
  link?: Boolean,
  desc?: Array<string>,
  callback?: Function
}

export const panelProps = {
  title: String,
  actions: createArrayProp<Actions>(),
  showDetail: createBooleanProp(true),
  detailText: createStringProp('查看详情')
}

export type PanelProps = ExtractPropTypes<typeof panelProps>
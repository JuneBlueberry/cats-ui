import { ExtractPropTypes } from 'vue'
import { typeProps } from '../loading/types'
import { createObjectProp, createStringProp } from '../utils'

export type TypeProps = 'default' | 'notice' | 'bill'

type Info = {
  label: String,
  value: String
}
export type ButtonInfo = {
  name: String,
  color: String
}

export type Model = {
  name: String,
  title: String,
  infos: Array<Info>,
  buttons: Array<ButtonInfo>
}

export const previewProps = {
  type: createStringProp<typeProps>('default'),
  model: createObjectProp<Model>()
}

export type PreviewProps = ExtractPropTypes<typeof previewProps>
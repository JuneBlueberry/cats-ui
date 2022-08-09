import { ExtractPropTypes, PropType } from 'vue'
import { createNumericProp, createStringProp } from '../utils'

export type typeProps = 'default'

export const loadingProps = {
  type: String as PropType<typeProps>,
  color: createStringProp(''),
  size: createNumericProp('')
}

export type LoadingProps = ExtractPropTypes<typeof loadingProps>
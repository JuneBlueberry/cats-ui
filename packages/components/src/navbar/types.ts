import { ExtractPropTypes } from 'vue'
import { createBooleanProp, createNumericProp, createStringProp } from '../utils'


export const navbarProps = {
  backgroundColor: createStringProp(''),
  color: createStringProp(''),
  showLeft: createBooleanProp(false),
  showRight: createBooleanProp(false),
  loading: createBooleanProp(false),
  loadingSize: createNumericProp(16)
}

export type NavbarProps = ExtractPropTypes<typeof navbarProps>
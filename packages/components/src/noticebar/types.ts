import { ExtractPropTypes } from 'vue'
import { createNumericProp, createStringProp } from '../utils'

export type modeProps = 'cycle' | 'multiline' | 'omit'

export const navbarProps = {
  content: String,
  backgroundColor: createStringProp(''),
  color: createStringProp(''),
  leftIcon: String,
  rightIcon: String,
  mode: createStringProp<modeProps>('cycle'),
  speed: createNumericProp(100)
}

export type NavbarProps = ExtractPropTypes<typeof navbarProps>
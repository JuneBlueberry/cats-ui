import radio from './radio.vue'
import radioGroup from './radio-group.vue'
import { withInstall } from '../utils/with-install'

const Radio = withInstall(radio)
const RadioGroup = withInstall(radioGroup)

export {
  Radio,
  RadioGroup
} 
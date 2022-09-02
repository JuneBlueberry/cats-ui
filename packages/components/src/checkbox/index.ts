import checkbox from './checkbox.vue'
import checkboxGroup from './checkbox-group.vue'
import { withInstall } from '../utils/with-install'

const Checkbox = withInstall(checkbox)
const CheckboxGroup = withInstall(checkboxGroup)

export {
  Checkbox,
  CheckboxGroup
} 
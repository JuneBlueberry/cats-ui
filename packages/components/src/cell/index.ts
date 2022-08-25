import cell from './cell.vue'
import cellGroup from './cell-group.vue'
import { withInstall } from '../utils/with-install'

const Cell = withInstall(cell)
const CellGroup = withInstall(cellGroup)

export {
  Cell,
  CellGroup
} 
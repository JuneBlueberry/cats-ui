import row from './row.vue'
import col from './col.vue'
import { withInstall } from '../utils/with-install'

const Row = withInstall(row)
const Col = withInstall(col)

export {
    Row,
    Col
} 
import row from './row.vue'
import col from './col.vue'

import type {App,Plugin} from "vue"

type SFCWithInstall<T> = T&Plugin
const withInstall = <T>(comp:T) => {
    (comp as SFCWithInstall<T>).install = (app:App)=>{
        //注册组件
        app.component((comp as any).name,comp)
    }
    return comp as SFCWithInstall<T>
}
const Row = withInstall(row)
const Col = withInstall(col)

export {
    Row,
    Col
} 
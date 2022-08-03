import {createApp} from 'vue'
import Button from './components/button.vue'
import Flex from './components/flex.vue';
import Overlay from './components/overlay.vue'

const app = createApp(Overlay)
app.mount('#app')
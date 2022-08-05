import {createApp} from 'vue'
import Button from './components/button.vue'
import Flex from './components/flex.vue';
import Overlay from './components/overlay.vue'
import Popup from './components/popup.vue'

const app = createApp(Popup)
app.mount('#app')
import { DialogPopup } from "./types"
import CatsDialog from './dialog.vue'
import { mountComponent } from '../utils/mount-components'
import { ComponentPublicInstance, h, getCurrentInstance, reactive } from 'vue'

export type ComponentInstance = ComponentPublicInstance<{}, any>;
let instance: ComponentInstance;

function initInstance(options) {
  const show = reactive<{
    state: boolean;
    [key: string]: any;
  }>({
    state: false,
  });

  const open = () => {
    show.state = true
  }

  const Wrapper = {
    setup() {
      return () => h(CatsDialog, { show: show.state, onClose: options.close })
    },
  };

  ({ instance } = mountComponent(Wrapper));

  if (instance) {
    Object.assign(instance as Object, { open: open })
  }
}

function Dialog(options: DialogPopup) {
  if (!instance) {
    initInstance(options);
    instance.open()
  }
}

export { Dialog }
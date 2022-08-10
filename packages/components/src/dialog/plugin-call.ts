import { DialogPopup } from "./types"
import CatsDialog from './dialog.vue'
import { mountComponent } from '../utils/mount-components'
import { ComponentPublicInstance, h, getCurrentInstance } from 'vue'

let instance: ComponentPublicInstance<{}, any>

function initInstance() {
  const Wrapper = {
    setup() {
      return () => h(CatsDialog, { show: true })
    },
  };

  ({ instance } = mountComponent(Wrapper));
}

function Dialog(options: DialogPopup) {
  if (!instance) {
    initInstance();
  }
}

export { Dialog }
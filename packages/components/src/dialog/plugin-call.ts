import { DialogPopup } from "./types"
import CatsDialog from './dialog.vue'
import { usePopupState, mountComponent } from '../utils/mount-components'
import { ComponentPublicInstance, h, getCurrentInstance, reactive } from 'vue'

let instance: ComponentPublicInstance<{}, any>;

function initInstance(options) {
  const Wrapper = {
    setup() {
      const { state, toggle } = usePopupState()
      return () => h(CatsDialog, { ...options, show: state.show, onUpdateShow: toggle })
    },
  };

  ({ instance } = mountComponent(Wrapper));
}

function Dialog(options: DialogPopup) {
  if (!instance) {
    initInstance(options);
  }
  instance.open()
}

// 关闭dialog
Dialog.close = function () {
  if (instance) {
    instance.close()
  }
}

export { Dialog }
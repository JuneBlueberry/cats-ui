import { DialogProps } from "./types"
import CatsDialog from './dialog.vue'
import { usePopupState, mountComponent } from '../utils/mount-components'
import { ComponentPublicInstance, h } from 'vue'

let instance: ComponentPublicInstance<{}, any>;

function initInstance(options) {
  const Wrapper = {
    setup() {
      const { state, toggle } = usePopupState()
      return () => h(CatsDialog, { ...state, onUpdateShow: toggle })
    },
  };

  ({ instance } = mountComponent(Wrapper));
}

function Dialog(options: DialogProps) {
  if (!instance) {
    initInstance(options);
  }
  instance.open(options)
}

// 关闭dialog
Dialog.close = function () {
  if (instance) {
    instance.close()
  }
}

export { Dialog }
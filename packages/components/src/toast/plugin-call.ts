import { ToastPopup } from "./types"
import CatsToast from './toast.vue'
import { usePopupState, mountComponent } from '../utils/mount-components'
import { ComponentPublicInstance, h, getCurrentInstance, reactive } from 'vue'

let instance: ComponentPublicInstance<{}, any>;

function initInstance(options) {
  const Wrapper = {
    setup() {
      const { state } = usePopupState()
      return () => h(CatsToast, { ...options, show: state.show })
    },
  };

  ({ instance } = mountComponent(Wrapper));
}

function Toast(options: ToastPopup) {
  if (!options.duration) {
    options.duration = options.icon === 'loading' ? 0 : 1500
  }
  if (!instance) {
    initInstance(options);
  }
  instance.open()
  if (options.duration && options.duration > 0) {
    setTimeout(() => {
      Toast.close()
    }, Number(options.duration));
  }
}

// 关闭dialog
Toast.close = function () {
  if (instance) {
    instance.close()
  }
}

export { Toast }
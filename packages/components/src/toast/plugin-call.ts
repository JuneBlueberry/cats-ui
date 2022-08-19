import { ToastProps } from "./types"
import CatsToast from './toast.vue'
import { usePopupState, mountComponent } from '../utils/mount-components'
import { ComponentPublicInstance, h, getCurrentInstance, reactive } from 'vue'

let instance: ComponentPublicInstance<{}, any>;

function initInstance(options) {
  const Wrapper = {
    setup() {
      const { state } = usePopupState()
      return () => h(CatsToast, { ...state })
    },
  };

  ({ instance } = mountComponent(Wrapper));
}

function Toast(options: ToastProps) {
  if (!options.duration) {
    options.duration = options.icon === 'loading' ? 0 : 1500
  }
  if (!instance) {
    initInstance(options);
  }
  instance.open(options)
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
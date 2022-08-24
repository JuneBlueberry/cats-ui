import { TopTipsProps } from "./types"
import CatsTopTips from './top-tips.vue'
import { usePopupState, mountComponent } from '../utils/mount-components'
import { ComponentPublicInstance, h } from 'vue'

let instance: ComponentPublicInstance<{}, any>;

function initInstance(options) {
  const Wrapper = {
    setup() {
      const { state } = usePopupState()
      return () => h(CatsTopTips, { ...state })
    },
  };

  ({ instance } = mountComponent(Wrapper));
}

function TopTips(options: TopTipsProps) {
  if (!instance) {
    initInstance(options);
  }
  instance.open(options)
  if (options.duration && options.duration > 0) {
    setTimeout(() => {
      TopTips.close()
    }, Number(options.duration));
  }
}

// 关闭dialog
TopTips.close = function () {
  if (instance) {
    instance.close()
  }
}

export { TopTips }
import { reactive, createApp, Component, getCurrentInstance } from 'vue';

export function usePopupState() {
  const state = reactive<{
    show: boolean;
    [key: string]: any;
  }>({
    show: false,
  });

  const toggle = (show: boolean) => {
    state.show = show;
  };

  const open = () => toggle(true);

  const close = () => toggle(false);

  const instance = getCurrentInstance();
  if (instance) {
    Object.assign(instance.proxy as object, { open, close, toggle });
  }

  return {
    open,
    close,
    state,
    toggle,
  };
}

export function mountComponent(RootComponent: Component) {
  const app = createApp(RootComponent);
  const root = document.createElement('div');

  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount();
      document.body.removeChild(root);
    },
  };
}
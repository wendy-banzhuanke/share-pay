import HuiAvatar from './index.vue';

export default {
  ...HuiAvatar,
  install: (Vue) => Vue.component(HuiAvatar.name, HuiAvatar),
};

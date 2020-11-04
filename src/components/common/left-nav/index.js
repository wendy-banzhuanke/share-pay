import HuiLeftNav from './index.vue';

export default {
  ...HuiLeftNav,
  install: (Vue) => Vue.component(HuiLeftNav.name, HuiLeftNav),
};

import HuiInput from './index.vue';

export default {
  ...HuiInput,
  install: (Vue) => Vue.component(HuiInput.name, HuiInput),
};

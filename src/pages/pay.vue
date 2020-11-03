<template>
  <div id="pay-page">
    <hui-input
      v-model="input"
      :debounce="2000"
      :throttle="2000"
      clearable
      left-icon="search"
      border
      placeholder="显示清除图标"
      @change="handleInput"
    />
    <hui-avatar src="https://img.yzcdn.cn/vant/cat.jpeg" />
  </div>
</template>

<script>
import HuiInput from '@/components/common/input';
import HuiAvatar from '@/components/common/avatar';

export default {
  name: 'pay-page',
  components: {
    HuiInput,
    HuiAvatar,
  },
  data() {
    return {
      input: '',
    };
  },
  methods: {
    handleInput(val) {
      console.log('val', val);
    },
  },
};
</script>

<style>
.pay-page {
}
</style>

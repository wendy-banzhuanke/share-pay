<template>
  <van-field
    v-bind="$attrs"
    v-on="$listeners"
    class="hui-input"
    @input="observerInput"
  />
</template>

<script>
import { Field } from 'vant';
import { debounce as Debounce, throttle as Throttle } from 'lodash-es';

export default {
  name: 'hui-input',
  components: {
    [Field.name]: Field,
  },
  props: {
    // 防抖间隔
    debounce: {
      type: Number,
      default: 0,
    },

    // 节流间隔
    throttle: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    debounceFn() {
      const _this = this;
      const spacingTime = this.debounce;

      return Debounce(function(val) {
        _this.observerChange(val);
      }, spacingTime);
    },

    throttleFn() {
      const _this = this;
      const spacingTime = this.throttle;

      return Throttle(function(val) {
        _this.observerChange(val);
      }, spacingTime);
    },
  },

  created() {
    this.$listeners.input = this.observerInput;

    if (this.debounce > 0 || this.throttle > 0) {
      this.$listeners.change = () => {};
    }
  },

  methods: {
    observerInput(val) {
      this.$emit('input', val);

      this.setValue(val);
    },

    setValue(val) {
      if (this.debounce > 0 && this.throttle > 0) {
        console.warn('仅执行“debounce”，"throttle"被忽略！');
      }

      // 防抖
      if (this.debounce > 0) {
        this.debounceFn(val);
        return;
      }

      // 节流
      if (this.throttle > 0) {
        this.throttleFn(val);
      }
    },

    observerChange(val) {
      this.$emit('change', val);
    },
  },
};
</script>

<style lang="less">
.hui-input {
  border: 1px solid #eee;
  border-radius: 50px;
}
</style>

<template>
  <div class="hui-left-nav">
    <van-list
      v-model="loadingValue"
      :finished="finished"
      finished-text=""
      :style="{ height: navHeight }"
    >
      <!--  @load="onLoad" -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(item, index) in list" :key="index">
          <template #title>
            {{ item }}
          </template>
        </van-sidebar-item>
      </van-sidebar>
    </van-list>
    <div class="hui-left-nav__fix">
      <slot name="fix">
        <p>转发条数1802312条</p>
        <p>转发条数1802312条</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "hui-left-nav",

  model: {
    prop: "loading",
    event: "change"
  },

  props: {
    list: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    },
    navHeight: {
      type: String,
      default: "60%"
    }
  },

  data() {
    return {
      activeKey: 0
    };
  },

  computed: {
    loadingValue: {
      get() {
        return this.loading;
      },
      set(val) {
        this.$emit("load", val);
      }
    }
  },

  created() {
    console.log("fix", this.$slot);
  },

  methods: {
    // onLoad() {
    //   console.log("onload---");
    //   this.$emit("load", this.loadingValue);
    // }
  }
};
</script>

<style lang="less">
.hui-left-nav {
  height: 100%;
  .van {
    &-list {
      overflow: auto;
    }
    &-sidebar {
      width: 180px;
      &-item {
        background-color: #f5f5f5;
        color: #333;
        font-size: 26px;
        &--select {
          font-weight: 500;
          background-color: #fff;
          &::before {
            width: 6px;
            height: 100%;
            background: #398dff;
          }
        }
      }
    }
  }
}
</style>

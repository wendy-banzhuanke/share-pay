<template>
  <div class="home">
    <!-- 搜索栏 -->
    <section class="home-search">
      <hui-input v-model="search" :debounce="2000" @change="handleSearch" />
      <hui-avatar
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604481273319&di=8242a60eeddad3e807ac5c0eff43c4db&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg"
      />
    </section>

    <!-- 菜单类别切换 -->
    <home-tabs />

    <!-- 列表展示区 -->
    <section class="home-content">
      <article class="home-content-nav">
        <hui-left-nav
          v-model="loading"
          :list="navList"
          :finished="finished"
          @load="handleLoad"
        />
      </article>
      <div class="home-content-main"></div>
    </section>
  </div>
</template>

<script>
import HuiAvatar from "@/components/common/avatar";
import HuiInput from "@/components/common/input";
import HuiLeftNav from "@/components/common/left-nav";
import HomeTabs from "@/components/home/tabs";

export default {
  name: "home",
  components: {
    HuiAvatar,
    HuiInput,
    HuiLeftNav,
    HomeTabs
  },
  data() {
    return {
      search: "",
      navList: [
        "标签1",
        "标签2",
        "标签2",
        "标签1",
        "标签2",
        "标签2",
        "标签1",
        "标签2",
        "标签2",
        "标签1",
        "标签2",
        "标签2",
        "标签1",
        "标签2",
        "标签2"
      ],
      loading: false,
      finished: false
    };
  },
  methods: {
    handleSearch(val) {
      console.log("val", val);
    },
    handleLoad(val) {
      console.log("loading", val);
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.navList.push(this.navList.length + 1);
        }

        // 加载状态结束
        this.loading = false;
        console.log("this.navList.length", this.navList.length);
        // 数据全部加载完成
        if (this.navList.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less">
.home {
  margin-top: 40px;
  &-search {
    display: flex;
    padding: 0 32px;
    .hui-input {
      flex: 1;
      margin-right: 32px;
    }
  }
  &-tabs {
    margin-top: 20px;
    margin-bottom: 16px;
  }
  &-content {
    display: flex;
    height: 100vh;
    &-nav {
      width: 180px;
      background-color: #f5f5f5;
    }
  }
}
</style>

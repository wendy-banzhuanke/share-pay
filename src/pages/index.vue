<template>
  <div class="index-page">
    <img alt="pay" src="../assets/img/banner.png" class="index-img_banner" />
    <template v-for="item in btnData">
      <router-link :key="item.title" :to="item.route" :class="item.class">
        {{ item.title }}
      </router-link>
    </template>
  </div>
</template>

<script>
const buttons = [
  {
    title: '充值',
    class: 'btn btn--primary',
    route: 'pay',
  },
  {
    title: '分享',
    class: 'btn btn--default',
    route: 'pay',
  },
  {
    title: '活动详情',
    class: 'btn btn--primary',
    route: 'pay',
  },
];

export default {
  name: 'index-page',

  data() {
    return {
      btnData: buttons,
    };
  },
};
</script>

<style lang="scss">
$bgc: #ffc93a;
$bgc-white: #fff;
$bgc-red-default: #ff3418;

.index-page {
  background: $bgc;
  height: 100vh;
  .index-img_banner {
    width: 100%;
    height: 312px;
  }
  a {
    margin: 0 auto;
    margin-top: 25px;
  }
  .btn {
    display: block;
    width: 270px;
    height: 50px;
    line-height: 50px;
    border-radius: 50px;
    text-align: center;
    font-size: 17px;

    &--default {
      background: $bgc-white;
      color: $bgc-red-default;
    }

    &--primary {
      background: $bgc-red-default;
      color: $bgc-white;
    }
  }
}
</style>

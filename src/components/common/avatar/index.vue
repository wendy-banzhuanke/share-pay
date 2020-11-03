<script lang="jsx">
import Vue from 'vue'
import { Image as VanImage } from 'vant';

Vue.use(VanImage)

export default {
  name: 'hui-avatar',

  functional: true,

  render: (h, {props, listeners}) => {
    const _props = {
      round: true,
      fit: "cover",
      width: 100,
      height: 100,
      ...props,
    }
    return <van-image {...{props: _props, on: listeners}} class="hui-avatar"/>
  },
}
</script>

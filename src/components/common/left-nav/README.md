## 业务组件：左侧导航组件

### hui-left-nav

### Props

| Prop        | Type    | Default | Description                          |
| ----------- | ------- | ------- | ------------------------------------ |
| `list`      | Array   |         | 数据                                 |
| `loading`   | Boolean | false   | 是否处于加载状态，用于 v-model       |
| `finished`  | Boolean | false   | 是否已加载完成                       |
| `navHeight` | String  | "100%"  | 导航高度，有吸底区块，可自由调整高度 |

### Events

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| `load`   | 加载事件 | --       |

### Slot

| 名称  | 说明         |
| ----- | ------------ |
| `fix` | 固定底部区块 |

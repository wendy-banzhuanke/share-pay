## 通用组件：文本框

### hui-input

可以使用 Vant UI `<van-field>` 的 api。

### Props

| Prop       | Type   | Default | Description                  |
| ---------- | ------ | ------- | ---------------------------- |
| `value`    | String |         | 控件值，用于 v-model         |
| `debounce` | Number | 0       | 防抖间隔时间（debounce > 0） |
| `throttle` | Number | 0       | 节流间隔时间（throttle > 0） |

其余与 `<van-field>` 相同。

### Events

| 事件名称 | 说明                            | 回调参数     |
| -------- | ------------------------------- | ------------ |
| `change` | 原生 change \| 防抖 \| 节流事件 | 目前的输入值 |

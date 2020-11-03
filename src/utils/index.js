/**
 * @author wendy
 * @description 公共函数定义
 */
export default {
  // 获取浏览器地址栏参数值
  getUrlParams(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)');
    let r = window.location.search.substr(1).match(reg);
    if (r !== null) return decodeURIComponent(r[2]);
  },
};

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
(() => import("@/assets/iconfont/iconfont.css"))(); // 引入自定义图标
import * as echarts from "echarts";
import { loginout } from "@/util/publicapis/index.js";
// 引入vue-echarts
import ECharts from "vue-echarts";
import "echarts";
// 引入百度地图
import BaiduMap from "vue-baidu-map";
import { BmlMarkerClusterer } from "vue-baidu-map";
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "OxETb6diaEcgGesobwhYEBoV5TZmMaf9",
});
Vue.component("bml-marker-cluster", BmlMarkerClusterer);

Vue.component("ECharts", ECharts);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts; // 挂载echarts
Vue.prototype.$loginout = loginout; // 挂载登出功能
window.__proto__.$loginout = loginout; // 挂载登出功能

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 引入mockjs
// require('./mockjs/mock')

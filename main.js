import App from "./App";

// #ifndef VUE3
import Vue from "vue";
Vue.config.productionTip = false;
App.mpType = "app";

try {
  function isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }

  // 统一 vue2 API Promise 化返回格式与 vue3 保持一致
  uni.addInterceptor({
    returnValue(res) {
      if (!isPromise(res)) {
        return res;
      }
      return new Promise((resolve, reject) => {
        res.then((res) => {
          if (res[0]) {
            reject(res[0]);
          } else {
            resolve(res[1]);
          }
        });
      });
    },
  });
} catch (error) {}

const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif

import uView from "uview-ui";
Vue.use(uView);
uni.$u.config.unit = "rpx";

// 发布界面跳转
uni.onTabBarMidButtonTap(() => {
  uni.navigateTo({
    url: "/pages/publish/publish",
    animationType: "slide-in-bottom",
    animationDuration: 2000,
  });
});

// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue";
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
import MeTabs from "@/components/me-tabs/me-tabs.vue";
Vue.component("mescroll-body", MescrollBody);
Vue.component("mescroll-uni", MescrollUni);
Vue.component("me-tabs", MeTabs);

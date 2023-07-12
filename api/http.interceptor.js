import store from "@/store";
import cache from "@/common/cache.js";
import { baseApiUrl } from "@/api/url.js";

let flag = false;
const baseUrl = baseApiUrl;
const install = (Vue, vm) => {
  Vue.prototype.$u.http.setConfig((config) => {
    config.baseUrl = baseUrl;
    config.showLoading = false;
    config.loadingText = ""; // 请求loading中的文字提示
    config.loadingTime = 2000; // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
    config.originalData = false; // 是否在拦截器中返回服务端的原始数据
    // loadingMask = true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    // 配置请求头信息
    config.header = {
      "content-type": "application/json;charset=UTF-8",
    };
    return config;
  });
  // 请求拦截，配置Token等参数
  Vue.prototype.$u.http.interceptors.request.use((config) => {
    const token = cache.get("accessToken");
    const orgInfo = cache.get("orgInfo");
    if (token) {
      (config.header.Authorization = "Bearer " + token),
        (config.header.OrgId = orgInfo.id || "");
    }
    config.header.projectId = cache.get("tenant");
    return config;
  });
  // 响应拦截，判断状态码是否通过
  Vue.prototype.$u.http.interceptors.response.use((res) => {
    if (res.success) {
      return res;
    } else {
      // token 已过期
      if (res.errCode === "USER_ACCOUNT_UNAUTHENTICATED" && !flag) {
        flag = true;
        store.dispatch("Logout").finally(() => {
          vm.$u.toast("身份信息已过期，请重新登录！");
          vm.$u.route({
            url: "pages/login/login",
            type: "reLaunch",
          });
        });
      }
      let errMessage = res.errMessage;
      if (
        errMessage !==
        "Transaction silently rolled back because it has been marked as rollback-only"
      ) {
        vm.$u.toast(errMessage || "服务器异常");
      }
      return false;
    }
  });
};

export default {
  install,
};

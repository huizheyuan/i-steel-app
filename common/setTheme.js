import { isEmpty } from "@/common/util.js";

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          theme: "light",
          navTheme: {},
          themeStyle: {},
        };
      },
      onShow() {
        this.theme = this.$store.state.app.theme;
        if (this.theme == "dark") {
          this.navTheme = {
            background: "#191919",
            color: "#ffffff",
          };
          this.homeNavTheme = {
            backgroundImage: "linear-gradient(to right, #0090ff, #006cff)",
            color: "#ffffff",
          };
          this.themeStyle = {
            color: "#fff",
            fontsize: "30rpx",
          };
          uni.setTabBarStyle({
            backgroundColor: "#191919",
            selectedColor: "#ffffff",
          });
        } else {
          this.themeStyle = {
            color: "#333",
            fontsize: "30rpx",
          };
          this.navTheme = {
            background: "#0090ff",
            color: "#ffffff",
          };
          this.homeNavTheme = {
            backgroundImage: "linear-gradient(to right, #0090ff, #006cff)",
            color: "#ffffff",
          };
          uni.setTabBarStyle({
            backgroundColor: "#ffffff",
            selectedColor: "#0090ff",
          });
        }
        this.$store.state.app.navTheme = this.navTheme;
        this.$store.state.app.themeStyle = this.themeStyle;
      },
    });
  },
};

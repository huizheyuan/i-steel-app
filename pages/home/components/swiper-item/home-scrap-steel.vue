<!-- 首页-废钢 -->
<template>
  <view class="home-scrap-steel-wrap">
    <u-grid :border="false" col="3" @click="clickCard" class="gridBox">
      <u-grid-item v-for="(item, index) in cardList" :key="index">
        <u-icon
          :customStyle="{
            width: '60rpx',
            height: '60rpx',
            padding: '38rpx 0 0',
          }"
          :name="item.icon"
          :size="50"
        ></u-icon>
        <text class="gridText">{{ item.title }}</text>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script>
import IconHot from "@/static/img/home/hot.png";
import IconInformation from "@/static/img/home/information.png";
import IconPrice from "@/static/img/home/price.png";
import IconLocation from "@/static/img/home/location.png";
import IconSource from "@/static/img/home/source.png";

export default {
  props: {
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data() {
    return {
      cardList: [
        { title: "钢厂调价", icon: IconInformation, path: "/pages/" },
        { title: "基地调价", icon: IconInformation, path: "/pages/" },
        { title: "定位", icon: IconLocation, path: "/pages/location/location" },
        { title: "热点行情", icon: IconHot, path: "/pages/price/price-hot" },
        { title: "市场价格", icon: IconPrice, path: "/pages/" },
        {
          title: "货源",
          icon: IconSource,
          path: "/pages/source/source-single",
        },
      ],
    };
  },
  methods: {
    clickCard(index) {
      const item = this.cardList[index];
      if (!item.path) return;
      uni.$u.route({ url: item.path, params: { title: item.title } });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-scrap-steel-wrap {
  .gridBox {
    margin: 20rpx 0;
    .gridText {
      padding: 20rpx 0;
    }
  }
}
</style>

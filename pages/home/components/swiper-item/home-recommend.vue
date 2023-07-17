<!-- 首页-推荐 -->
<template>
  <view class="home-recommend-wrap">
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
import IconAnalysis from "@/static/img/home/analysis.png";
import IconPrice from "@/static/img/home/price.png";

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
        {
          title: "期货行情",
          icon: IconInformation,
          path: "/pages/price/price",
        },
        { title: "热点视频", icon: IconHot, path: "/pages/video/video-hot" },
        { title: "价格汇总", icon: IconPrice, path: "/pages/" },
        { title: "市场分析", icon: IconAnalysis, path: "/pages/" },
        {
          title: "优质货源",
          icon: IconHot,
          path: "/pages/source/source-single",
        },
        {
          title: "热点资讯",
          icon: IconHot,
          path: "/pages/information/information-hot",
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
.home-recommend-wrap {
  .gridBox {
    margin: 20rpx 0;
    .gridText {
      padding: 20rpx 0;
    }
  }
}
</style>

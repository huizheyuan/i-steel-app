<!-- 首页-推荐 -->
<template>
  <view>
    <u-grid :border="false" col="3" @click="clickCard" class="cardBox">
      <u-grid-item v-for="(item, index) in cardList" :key="index">
        <u-icon
          :customStyle="{ paddingTop: 20 + 'rpx' }"
          :name="item.icon"
          :size="50"
        ></u-icon>
        <text class="gridText">{{ item.title }}</text>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script>
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
        { title: "期货行情", icon: "heart", path: "/pages/price/price" },
        { title: "热点视频", icon: "star", path: "/pages/video/video-hot" },
        { title: "价格汇总", icon: "order", path: "/pages/" },
        { title: "市场分析", icon: "order", path: "/pages/" },
        {
          title: "优质货源",
          icon: "order",
          path: "/pages/source/source-single",
        },
        {
          title: "热点资讯",
          icon: "order",
          path: "/pages/information/information-hot",
        },
      ],
    };
  },
  methods: {
    clickCard(index) {
      const path = this.cardList[index].path;
      if (!path) return;
      uni.$u.route({ url: path });
    },
  },
};
</script>

<style lang="scss" scoped></style>

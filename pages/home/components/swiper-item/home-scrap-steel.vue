<!-- 首页-废钢 -->
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
        { title: "钢厂调价", icon: "heart", path: "/pages/" },
        { title: "基地调价", icon: "star", path: "/pages/" },
        { title: "定位", icon: "order", path: "/pages/" },
        { title: "热点行情", icon: "order", path: "/pages/price/price-hot" },
        { title: "市场价格", icon: "order", path: "/pages/" },
        { title: "货源", icon: "order", path: "/pages/source/source-single" },
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

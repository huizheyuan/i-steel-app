<template>
  <view class="source-detail-wrap pageBox">
    <custom-navbar :title="sourceData.title || '货源详情'"> </custom-navbar>
    <view class="content">
      <u-swiper
        :list="sourceData.imgList"
        keyName="url"
        showTitle
        :autoplay="false"
        indicator
        circular
        interval="3000"
        radius="5"
        height="460"
      ></u-swiper>
      <!-- TODO: 详情信息 -->
    </view>
    <view class="footer">
      <u-icon name="chat" color="#606266" size="40" class="icon"></u-icon>
      <u-icon
        name="share-square"
        color="#606266"
        size="40"
        class="icon"
      ></u-icon>
      <u-icon name="star" color="#606266" size="40" class="icon"></u-icon>
    </view>
  </view>
</template>

<script>
import CustomNavbar from "@/components/custom-navbar";

export default {
  components: {
    CustomNavbar,
  },
  data() {
    return {
      sourceData: {
        title: "",
        imgList: [],
      },
    };
  },
  onLoad(data) {
    console.log(data);
  },
  methods: {
    rightClick() {},
  },
};
</script>

<style lang="scss" scoped>
.source-detail-wrap {
  background-color: $uni-bg-color;
  .content {
    flex: 1;
    overflow: scroll;
  }
  .footer {
    height: 60rpx;
    border-top: 1px solid $uni-border-color;
    padding: 18rpx 30rpx;
    display: flex;
    flex-direction: row-reverse;
    .icon {
      margin: 0 18rpx;
    }
  }
}
</style>

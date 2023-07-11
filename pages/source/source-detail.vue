<template>
  <view class="source-detail-wrap">
    <custom-navbar :title="sourceTitle || '货源详情'"> </custom-navbar>
    <view class="content"></view>
    <view class="footer">
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
      sourceTitle: "",
    };
  },
  methods: {
    rightClick() {},
  },
};
</script>

<style lang="scss" scoped>
.source-detail-wrap {
  padding-top: var(--status-bar-height);
  height: 100%;
  background-color: $uni-bg-color;
  display: flex;
  flex-direction: column;
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

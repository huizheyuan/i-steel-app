<template>
  <view class="information-detail-wrap pageBox">
    <custom-navbar :title="infoData.title || '资讯详情'"> </custom-navbar>
    <view class="content">
      <text v-html="infoData.content"></text>
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
      infoData: {
        title: "",
        imgList: [],
        content: "1.资讯详情111111。<br />2.资讯详情2222。",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.information-detail-wrap {
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

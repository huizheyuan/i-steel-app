<template>
  <view>
    <u-swiper
      :list="adList"
      keyName="url"
      showTitle
      autoplay
      indicator
      circular
      interval="3000"
      radius="5"
      height="300"
    ></u-swiper>
    <view class="good-list">
      <view
        :id="'good' + good.id"
        class="good-li"
        v-for="good in list"
        :key="good.id"
      >
        <image class="good-img" :src="good.goodImg" mode="widthFix" />
        <view class="flex-item">
          <view class="good-name">{{ good.goodName }}</view>
          <text class="good-price">{{ good.goodPrice }} 元</text>
          <text class="good-sold">已售{{ good.goodSold }}件</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      adList: [
        {
          url: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
        },
        {
          url: "https://cdn.uviewui.com/uview/resources/video.mp4",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          poster: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          type: "video",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.good-list {
  background-color: #fff;

  .good-li {
    display: flex;
    align-items: center;
    padding: 20upx;
    border-bottom: 1upx solid #eee;

    .good-img {
      width: 160upx;
      height: 160upx;
      margin-right: 20rpx;
    }

    .flex-item {
      flex: 1;

      .good-name {
        font-size: 26upx;
        line-height: 40upx;
        height: 80upx;
        margin-bottom: 20upx;
        overflow: hidden;
      }
      .good-price {
        font-size: 26upx;
        color: red;
      }
      .good-sold {
        font-size: 24upx;
        margin-left: 16upx;
        color: gray;
      }
    }
  }
}
</style>

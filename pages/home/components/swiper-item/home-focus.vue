<!-- 首页-关注 -->
<template>
  <view>
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
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
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

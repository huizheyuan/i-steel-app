<template>
  <view>
    <view v-if="index === 0">
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
      <home-hot></home-hot>
    </view>
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
import HomeHot from "./home-hot.vue";
import ad1 from "@/static/img/temp/ad1.jpg";
import ad2 from "@/static/img/temp/ad2.png";

export default {
  components: { HomeHot },
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
    return {
      adList: [
        {
          url: ad1,
          title: "3J58是一种弹性合金，弹性合金是精密合金的一类",
        },
        {
          url: ad2,
          title: "禄浩不锈钢：GH3536高温合金的性能及应用领域",
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

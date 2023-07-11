<template>
  <view class="home-hot-wrap">
    <view class="titleBox">
      <u-icon name="grid-fill" color="#c81522" size="40"></u-icon>
      <text>今日热点</text>
    </view>
    <swiper
      class="swiperBox"
      @click="goDetail"
      :autoplay="true"
      :circular="true"
      :vertical="true"
      :interval="6000"
      :duration="500"
    >
      <swiper-item class="swiperItem" v-for="(item, i) in list" :key="i">
        <view class="title ellipsis">{{ item.title }}</view>
        <view class="content">{{ item.content }}</view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "111",
          title: "志丹县柳沟段乡村道路山体滑坡",
          content:
            "志丹县柳沟段乡村道路山体滑坡，导致延吴段高压架线118顺刘线14号杆距断崖处不足2米",
        },
        {
          id: "112",
          title: "1kV及以下配线工程施工与验收规范（GB 50575-2010）	",
          content:
            "根据住房和城乡建设部《关于印发(2008年工程建设标准规范制定、修订计划（第二批）〉的通知》（建标(2008)105号）的要求，规范 编制组经广泛调查研究，认真总结实践经验，参考有关国际标准，并在广泛征求意见的基础上，制定本规范。",
        },
        {
          id: "113",
          title: "3.6KV~40.5KV交流金属封闭开关设备和控制设备（GB 3906-2006）",
          content:
            "本标准修改采用IEC 62271-200: 2003《额定电压1 kV 以上52 kV 及以下交流金属封闭开关设备和控制设备》（第一版、即IEC 60298 的第四版）。",
        },
      ],
    };
  },
  methods: {
    goDetail(a, b) {
      console.log(a, b);
    },
  },
};
</script>

<style lang="scss" scoped>
.home-hot-wrap {
  height: 280rpx;
  margin: 20rpx;
  display: flex;
  flex-direction: column;

  .titleBox {
    display: flex;
    font-weight: bold;
    font-size: $uni-font-size-lgx;
    margin-bottom: 16rpx;
    color: #c81522;
  }

  .swiperBox {
    flex: 1;
    padding: 10rpx 20rpx;
    .swiperItem {
      .title {
        font-weight: bold;
        font-size: $uni-font-size-lg;
        margin-bottom: 10rpx;
      }
      .content {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>

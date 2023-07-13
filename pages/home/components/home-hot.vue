<template>
  <view class="home-hot-wrap">
    <view class="titleBox">
      <u-icon name="grid-fill" color="#c81522" size="40"></u-icon>
      <text>今日热点</text>
    </view>
    <swiper
      class="swiperBox"
      :autoplay="true"
      :circular="true"
      :vertical="true"
      :interval="6000"
      :duration="500"
    >
      <swiper-item
        class="swiperItem"
        v-for="(item, i) in list"
        :key="i"
        @click="goDetail(item)"
      >
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
          title: "禄浩金属集团解析：镍基合金有什么用？",
          content:
            "镍基合金一般以Ni含量超过30wt%之合金称之，常见产品之Ni含量都超过50wt%， 由于具有超群的高温机械强度与耐蚀性质，与铁基和钴基合金合称为超合金(Superalloy)，一般是应用在540℃以上的高温环境，并依其使用场合，选用不同合金设计，多用于特殊耐蚀环境、高温腐蚀环境、需具备高温机械强度之设备。常应用于航天、能源、石化工业或特殊电子/光电等领域。",
        },
        {
          id: "112",
          title: "钢材市场需求强劲，还是可以谨慎乐观的，因为中国是制造业大国",
          content:
            "周三，连续上涨两天的钢铁原材料期货价格，停住了上涨的步伐。截至下午收盘，铁矿石期货主力合约下跌1.73%，报收680元；焦煤期货价格下跌2.04%，报收1822.5元；焦炭期货价格下跌1.8%，报收2430.5元。螺纹钢期货走势继续弱于热轧板卷，螺纹钢收盘下跌，热轧板卷收盘上涨，分别报收3673元和3761元。",
        },
        {
          id: "113",
          title: "10月国内外有关钢材及能源的最新资讯",
          content:
            "从美国和日本钢铁工业的发展历程看，其粗钢产量于1973年同时达到峰值（美国：1.368亿吨，日本：1.19亿吨）。此后，美国粗钢产量在1982年跌破1亿吨，再之后年均粗钢产量仅为8800万吨，距离高峰值降幅高达36%；日本粗钢产量则在峰值过后保持年均1.05亿吨的粗钢产量，距离高峰值下降12%。",
        },
      ],
    };
  },
  methods: {
    goDetail(item) {
      //   uni.$u.route({
      //     url: "/pages/information/information-detail",
      //     params: { id: item.id },
      //   });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-hot-wrap {
  height: 260rpx;
  margin: 24rpx 20rpx;
  display: flex;
  flex-direction: column;

  .titleBox {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: $uni-font-size-lgx;
    margin: 20rpx 0;
    color: #c81522;
  }

  .swiperBox {
    flex: 1;
    padding: 10rpx 20rpx;
    .swiperItem {
      .title {
        font-weight: bold;
        font-size: $uni-font-size-lg;
        color: $uni-text-color;
        margin-bottom: 16rpx;
      }
      .content {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>

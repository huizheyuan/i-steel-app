<template>
  <view class="home-wrap">
    <!-- <tabs-swiper :tabs="tabs"></tabs-swiper> -->
    <view>
      <u-tabs
        :current="swiperIndex"
        :list="tabs"
        lineWidth="75"
        lineHeight="6"
        lineColor="#3c9cff"
        :activeStyle="{
          color: '#303133',
          fontWeight: 'bold',
          transform: 'scale(1.05)',
        }"
        :inactiveStyle="{
          color: '#606266',
          transform: 'scale(1)',
        }"
        itemStyle="padding: 0 30rpx; height: 80rpx;"
        style="padding: 10rpx 16rpx"
      >
        <view
          slot="right"
          style="padding-left: 16rpx"
          @tap="showAllTabs = true"
        >
          <u-icon name="list" size="50" bold></u-icon>
        </view>
      </u-tabs>
      <u-popup
        :show="showAllTabs"
        :round="10"
        mode="top"
        closeable
        @close="showAllTabs = false"
        class="popupTag"
      >
        <view class="tagBox">
          <h4 class="tagTitle center">所有标签页</h4>
          <u-tag
            v-for="(item, index) in tabs"
            :key="index"
            :text="item.name"
            :closable="item.closable"
            type="info"
            plain
            class="tag"
          >
          </u-tag>
        </view>
        <u-button
          type="info"
          icon="edit-pen"
          shape="circle"
          class="tagBtn center"
          @click="goSort"
        >
          自定义排序
        </u-button>
      </u-popup>
    </view>
    <swiper
      :current="swiperIndex"
      :duration="300"
      easing-function="linear"
      @change="swiperChange"
    >
      <swiper-item v-for="(item, index) in tabs" :key="index">
        <scroll-view
          :lower-threshold="80"
          :refresher-enabled="true"
          :refresher-triggered="refreStatus"
          @refresherrefresh="handleRefre"
          @scrolltolower="swiperScrollLower"
          style="height: 100%"
          scroll-y="true"
        >
        </scroll-view>
      </swiper-item>
    </swiper>
    <!-- <u-swiper
      :list="adList"
      keyName="url"
      showTitle
      autoplay
      indicator
      circular
      interval="3000"
      radius="5"
      height="300"
    ></u-swiper> -->
  </view>
</template>

<script>
import tabsSwiper from "@/components/tabs-swiper";

export default {
  components: {
    tabsSwiper,
  },
  data() {
    return {
      swiperIndex: 0,
      showAllTabs: false,
      tabs: [
        { name: "关注", closable: false, content: ["首页-1", "首页-2"] },
        { name: "推荐", closable: false, content: ["测试-1", "测试-2"] },
        { name: "废钢", closable: false, content: ["测试-1", "测试-2"] },
        { name: "废有色", closable: false, content: ["测试-1", "测试-2"] },
        { name: "废不锈钢", closable: false, content: ["测试-1", "测试-2"] },
        { name: "钢坯", closable: false, content: ["测试-1", "测试-2"] },
        { name: "期货", closable: false, content: ["测试-1", "测试-2"] },
        { name: "铁合金", closable: false, content: ["测试-1", "测试-2"] },
      ],
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
      refreStatus: false,
      navInfos: [], //所有navitem的节点信息
      parentLeft: 0, //nav盒子的节点信息
      componentWidth: 0, //nav盒子的宽度
      scrollToLeft: 0, //scrollview需要滚动的距离
      navItemLeft: 0, //选中下划线的显示位置
    };
  },
  onLoad() {},
  methods: {
    goSort() {},
    swiperChange(e) {
      this.swiperIndex = e.detail.current;
      this.scrollDom();
    },
    scrollDom() {
      let info = this.navInfos[this.swiperIndex];
      let offsetLeft = info.left - this.parentLeft;
      let scrollLeft = offsetLeft - (this.componentWidth - info.width) / 2;
      this.scrollToLeft = scrollLeft < 0 ? 0 : scrollLeft;
      this.navItemLeft = this.navInfos[this.swiperIndex].left;
      setTimeout(() => {
        this.navItemWidth = info.width;
      }, 50);
    },
  },
};
</script>

<style lang="scss" scoped>
.home-wrap {
  height: 100%;
  background-color: $uni-bg-color;
  display: flex;
  flex-direction: column;
  .popupTag {
    .tagBox {
      padding: 40rpx 20rpx 20rpx;
      background-color: $uni-bg-color-grey;
      .tagTitle {
        margin: 20rpx 0 40rpx;
      }
      .tag {
        width: fit-content;
        display: inline-block;
        margin: 0 10rpx 16rpx;
      }
    }
    .tagBtn {
      width: 50%;
      margin: 20rpx auto;
    }
  }
}
</style>

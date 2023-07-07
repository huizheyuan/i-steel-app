<template>
  <view class="home-wrap">
    <view>
      <swiper-search
        :list="searchList"
        :iconSize="40"
        iconColor="#3c9cff"
        @click="goSearch"
      ></swiper-search>
      <me-tabs v-model="tabIndex" :tabs="tabs" :fixed="false" :tab-width="130">
        <view
          slot="right"
          style="align-self: center; padding: 16rpx"
          @tap="showAllTabs = true"
        >
          <u-icon name="list" size="50" bold></u-icon>
        </view>
      </me-tabs>
    </view>

    <swiper
      :style="{ height: height }"
      :current="tabIndex"
      @change="swiperChange"
    >
      <swiper-item v-for="(tab, i) in tabs" :key="i">
        <mescroll-item
          ref="mescrollItem"
          :i="i"
          :index="tabIndex"
          :tabs="tabs"
        ></mescroll-item>
      </swiper-item>
    </swiper>
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
</template>

<script>
import { HOME_TOP_LIST } from "@/common/enums.js";
import SwiperSearch from "@/components/swiper-search";
import MescrollItem from "./components/home-mescroll-swiper-item.vue";

export default {
  components: {
    SwiperSearch,
    MescrollItem,
  },
  data() {
    return {
      showAllTabs: false,
      height: "400px", // 需要固定swiper的高度
      tabs: HOME_TOP_LIST.properties,
      tabIndex: 0, // 当前tab的下标
      searchList: [
        { id: "1111", title: "日照香炉生紫烟" },
        { id: "2222", title: "遥看瀑布挂前川" },
        { id: "3333", title: "飞流直下三千尺" },
        { id: "4444", title: "疑似银河落九天" },
      ],
    };
  },
  methods: {
    goSearch(current) {
      uni.$u.route({
        url: "/pages/home/home-search",
        params: this.searchList[current],
      });
    },
    goSort() {},
    // 轮播菜单
    swiperChange(e) {
      this.tabIndex = e.detail.current;
    },
    // 获取指定下标的mescroll对象
    // getMescroll(i){
    // 	let mescrollItems = this.$refs.mescrollItem;
    // 	if(mescrollItems){
    // 		let item = mescrollItems[i]
    // 		if(item) return item.mescroll
    // 	}
    // 	return null
    // }
  },
  onLoad() {
    // 需要固定swiper的高度
    this.height = uni.getSystemInfoSync().windowHeight + "px";
  },
  onShow() {
    // 返回刷新: https://www.mescroll.com/uni.html#note 第二点
    // if(this.canReset){
    // 	let curMescroll = this.getMescroll(this.tabIndex)
    // 	curMescroll && curMescroll.resetUpScroll()
    // }
    // this.canReset = true
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

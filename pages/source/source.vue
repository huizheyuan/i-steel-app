<!-- 货源 -->
<template>
  <view class="source-wrap pageBox">
    <view>
      <swiper-search
        :list="searchList"
        :iconSize="40"
        iconColor="#3c9cff"
        @click="goSearch"
      >
        <view
          slot="right"
          @tap="goPublish"
          style="align-self: center; padding: 16rpx"
        >
          <u-icon name="plus" size="40" bold></u-icon>
        </view>
      </swiper-search>
      <me-tabs v-model="tabIndex" :tabs="tabs" :fixed="false" :tab-width="130">
      </me-tabs>
      <filter-box></filter-box>
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
  </view>
</template>

<script>
import { SOURCE_SORT } from "@/common/enums.js";
import SwiperSearch from "@/components/swiper-search";
import MescrollItem from "./components/source-mescroll-swiper-item.vue";
import FilterBox from "./components/source-filter-box.vue";

export default {
  components: {
    SwiperSearch,
    MescrollItem,
    FilterBox,
  },
  data() {
    return {
      searchList: [
        { id: "1111", title: "货源1" },
        { id: "2222", title: "货源12" },
        { id: "3333", title: "货源13" },
        { id: "4444", title: "货源14" },
      ],
      height: "400px", // 需要固定swiper的高度
      tabs: SOURCE_SORT.properties,
      tabIndex: 0, // 当前tab的下标
    };
  },
  methods: {
    goSearch() {},
    goPublish() {
      uni.$u.route({
        url: "/pages/publish/publish",
      });
    },
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
.source-wrap {
  background-color: $uni-bg-color;
  padding: 0 20rpx;
}
</style>

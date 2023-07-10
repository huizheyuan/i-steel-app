<!-- 货源 -->
<template>
  <view class="source-wrap">
    <view>
      <me-tabs v-model="tabIndex" :tabs="tabs" :fixed="false" :tab-width="130">
        <view
          slot="right"
          style="align-self: center; padding: 16rpx"
          @tap="goPublish"
        >
          <u-icon name="plus" size="40" bold></u-icon>
        </view>
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
import { HOME_TOP_LIST } from "@/common/enums.js";
import MescrollItem from "./components/source-mescroll-swiper-item.vue";
import FilterBox from "./components/source-filter-box.vue";

export default {
  components: {
    MescrollItem,
    FilterBox,
  },
  data() {
    return {
      height: "400px", // 需要固定swiper的高度
      tabs: HOME_TOP_LIST.properties,
      tabIndex: 0, // 当前tab的下标
    };
  },
  methods: {
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
  height: 100%;
  background-color: $uni-bg-color;
  display: flex;
  flex-direction: column;
}
</style>

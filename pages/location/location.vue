<!-- 定位 -->
<template>
  <view class="location-wrap pageBox">
    <custom-navbar :title="pageTitle || '定位'"> </custom-navbar>
    <me-tabs v-model="tabIndex" :tabs="tabs" :fixed="false"> </me-tabs>
    <location-filter-box></location-filter-box>

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
import CustomNavbar from "@/components/custom-navbar";
import SwiperSearch from "@/components/swiper-search";
import MescrollItem from "./components/location-mescroll-swiper-item.vue";
import LocationFilterBox from "./components/location-filter-box.vue";

export default {
  components: {
    CustomNavbar,
    SwiperSearch,
    LocationFilterBox,
    MescrollItem,
  },
  data() {
    return {
      pageTitle: null,
      height: "400px", // 需要固定swiper的高度
      tabs: [
        { id: 1, key: 1, name: "钢厂调价" },
        { id: 2, key: 2, name: "市场价格" },
        { id: 3, key: 3, name: "基地价格" },
      ],
      tabIndex: 0, // 当前tab的下标
    };
  },
  onLoad(data) {
    this.pageTitle = data.title;
  },
  methods: {
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
    this.height = uni.getSystemInfoSync().windowHeight - 160 + "px";
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
.location-wrap {
  background-color: $uni-bg-color;
  padding: 0 20rpx;
}
</style>

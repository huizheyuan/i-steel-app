<!-- 热点资讯 -->
<template>
  <view class="information-hot-wrap pageBox">
    <me-tabs v-model="tabIndex" :tabs="tabs" :fixed="false" :tab-width="130">
    </me-tabs>

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
import MescrollItem from "./components/information-mescroll-swiper-item.vue";

export default {
  components: {
    MescrollItem,
  },
  data() {
    return {
      height: "400px", // 需要固定swiper的高度
      tabs: [
        { id: 1, key: 1, name: "废钢早参" },
        { id: 2, key: 2, name: "废钢早评" },
        { id: 3, key: 3, name: "废钢日评" },
        { id: 4, key: 4, name: "沙钢调价" },
        { id: 5, key: 5, name: "钢坯调价" },
        { id: 6, key: 6, name: "新昌铜业条件" },
      ],
      tabIndex: 0, // 当前tab的下标
    };
  },
  methods: {
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
.information-hot-wrap {
  background-color: $uni-bg-color;
}
</style>

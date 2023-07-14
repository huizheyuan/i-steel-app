<template>
  <view class="home-wrap pageBox">
    <view>
      <swiper-search
        :list="searchList"
        :iconSize="40"
        iconColor="#3c9cff"
        @click="goSearch"
      >
        <view slot="left" @tap="goLocation" class="locationBox">
          <text class="bold">
            {{ locationInfo.city || "-" }}
          </text>
          <view class="weather">
            <u-icon
              name="map"
              size="20"
              bold
              style="margin-right: 8rpx"
            ></u-icon>
            <text>
              {{
                `${weatherInfo.weather || "-"} ${
                  weatherInfo.temperature || "-"
                }°`
              }}
            </text>
          </view>
        </view>
      </swiper-search>
      <me-tabs v-model="tabIndex" :tabs="tabs" :fixed="false" :tab-width="130">
        <view
          slot="right"
          style="padding: 16rpx"
          @tap="$refs.HomeTagSort.load()"
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

    <home-tag-sort ref="HomeTagSort" :list="tabs"></home-tag-sort>
  </view>
</template>

<script>
import { HOME_TOP_LIST } from "@/common/enums.js";
import SwiperSearch from "@/components/swiper-search";
import MescrollItem from "./components/home-mescroll-swiper-item.vue";
import HomeTagSort from "./components/home-tag-sort.vue";
import { getGeocode, getWeather } from "@/api/basic/weather";

export default {
  components: {
    HomeTagSort,
    SwiperSearch,
    MescrollItem,
  },
  data() {
    return {
      locationInfo: {},
      weatherInfo: {},
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
  mounted() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      uni.getLocation({
        type: "gcj02",
        geocode: true,
        success: function (res) {
          this.locationInfo = res.address || {};

          if (!res || !res.longitude || !res.latitude) return;
          getGeocode(`${res.longitude},${res.latitude}`).then((geocode) => {
            const code = geocode
              ? geocode.regeocode.addressComponent.adcode
              : null;

            if (!code) return;
            getWeather(code).then((weather) => {
              this.weatherInfo = weather.lives[0] || {};
            });
          });
        },
      });
    },
    goLocation() {
      uni.$u.route({
        url: "/pages/home/home-location",
      });
    },
    goSearch(current) {
      uni.$u.route({
        url: "/pages/home/home-search",
        params: this.searchList[current],
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
.home-wrap {
  background-color: $uni-bg-color;
  padding: 0 20rpx;
  .locationBox {
    padding: 16rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: $uni-font-size-lg;
    .weather {
      display: flex;
      font-size: $uni-font-size-sm;
    }
  }
}
</style>

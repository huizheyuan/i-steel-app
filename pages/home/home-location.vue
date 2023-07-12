<template>
  <view class="home-location">
    <view class="locationBox">
      <text>定位：</text>
      <u-tag :text="locationName" icon="map" plain class="tag"> </u-tag>
    </view>
    <view class="listBox">
      <u-index-list :index-list="indexList">
        <view v-for="(item, index) in locationList" :key="index">
          <!-- #ifdef APP-NVUE -->
          <u-index-anchor
            :text="indexList[index]"
            :size="20"
            height="60"
            bgColor="#ffffff"
          ></u-index-anchor>
          <!-- #endif -->
          <u-index-item>
            <!-- #ifndef APP-NVUE -->
            <u-index-anchor
              :text="indexList[index]"
              :size="20"
              height="60"
              bgColor="#ffffff"
            ></u-index-anchor>
            <!-- #endif -->
            <view v-for="(cell, index2) in item" :key="index2" class="listCell">
              <view>{{ cell }}</view>
            </view>
          </u-index-item>
        </view>
      </u-index-list>
    </view>
  </view>
</template>

<script>
import { AlphabeticalIndex } from "@/common/constant.js";
import CityList from "@/common/city.js";

export default {
  data() {
    return {
      locationName: "西安",
      indexList: AlphabeticalIndex,
      locationList: CityList,
    };
  },
  mounted() {
    uni.getLocation({
      type: "wgs84",
      geocode: true,
      success: function (res) {
        this.locationName = "西安";
        console.log(res);
        console.log("当前位置的经度：" + res.longitude);
        console.log("当前位置的纬度：" + res.latitude);
      },
    });
  },
  methods: {
    clickCity(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.home-location {
  height: 100%;
  padding: 0 50rpx 0 32rpx;
  display: flex;
  flex-direction: column;
  .locationBox {
    margin: 40rpx 0 20rpx;
    .tag {
      width: fit-content;
      display: inline-block;
      margin: 0 10rpx 16rpx;
    }
  }
  .listBox {
    flex: 1;
    overflow-y: scroll;
    .listCell {
      padding: 20rpx 0;
    }
  }
}
</style>

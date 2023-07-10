<template>
  <view class="home-location">
    <view class="locationBox">
      <text>定位：</text>
      <u-tag :text="locationName" icon="map" plain class="tag"> </u-tag>
    </view>
    <u-index-list :index-list="indexList" class="listBox">
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
</template>

<script>
import CityList from "@/common/city.js";

export default {
  data() {
    return {
      locationName: "西安",
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
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
  padding: 40rpx 50rpx 40rpx 32rpx;
  display: flex;
  flex-direction: column;
  .locationBox {
    margin: 20rpx 0 40rpx;
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

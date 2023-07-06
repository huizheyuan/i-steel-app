<template>
  <view>
    <view class="page-body">
      <view class="page-section page-section-gap">
        <map
          style="width: 100%; height: 300px"
          :latitude="latitude"
          :longitude="longitude"
        >
        </map>
      </view>
    </view>
  </view>
</template>

<script>
import location from "@/static/img/common/location.png";

export default {
  data() {
    return {
      id: 0, // 使用 marker点击事件 需要填写id
      title: "map",
      latitude: 39.909,
      longitude: 116.39742,
      covers: [
        {
          latitude: 39.909,
          longitude: 116.39742,
          iconPath: location,
        },
        {
          latitude: 39.9,
          longitude: 116.39,
          iconPath: location,
        },
      ],
    };
  },
  onLaunch() {
    // this.getPosition();
  },
  methods: {
    getPosition() {
      uni.getLocation({
        type: "wgs84",
        success: function (res) {
          this.latitude = res.latitude;
          this.longitude = res.longitude;
        },
      });
    },
  },
};
</script>

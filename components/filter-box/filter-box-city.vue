<template>
  <view class="filter-box-city-wrap">
    <u-popup :show="show" :round="10" mode="top" @close="show = false">
      <view class="popupBox">
        <custom-navbar
          :title="'城市'"
          bgColor="#f8f8f8"
          titleColor="#333"
          :autoBack="false"
        >
          <view slot="right" @click="show = false">
            <u-icon name="close" size="36"></u-icon>
          </view>
        </custom-navbar>
      </view>
    </u-popup>
  </view>
</template>

<script>
import CustomNavbar from "@/components/custom-navbar";

export default {
  components: {
    CustomNavbar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    load() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-box-city-wrap {
  margin-top: var(--status-bar-height);
  .popupBox {
    height: 80vh;
    padding: 40rpx 20rpx 20rpx;
    background-color: $uni-bg-color-grey;
    .title {
      font-size: $uni-font-size-lg;
      color: $uni-text-color;
      margin-right: 16rpx;
    }
    .tips {
      font-size: $uni-font-size-sm;
      color: $uni-text-color-placeholder;
    }
  }
}
</style>

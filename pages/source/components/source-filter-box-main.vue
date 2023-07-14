<template>
  <view class="source-filter-box-main-wrap">
    <u-popup :show="show" :round="10" @close="show = false">
      <view class="popupBox">
        <!-- 全部筛选 -->
        <view class="filterBox"></view>
        <view class="operateBox">
          <u-button text="重置" style="margin-right: 8rpx"></u-button>
          <u-button text="完成" style="margin-left: 8rpx"></u-button>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      show: false,
    };
  },
  methods: {
    load() {
      //   this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.source-filter-box-main-wrap {
  .popupBox {
    height: 60vh;
    padding: 40rpx 20rpx 20rpx;
    background-color: $uni-bg-color-grey;
    display: flex;
    flex-direction: column;
    .filterBox {
      flex: 1;
      overflow-y: scroll;
    }
    .operateBox {
      display: flex;
    }
  }
}
</style>

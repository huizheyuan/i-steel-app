<template>
  <view class="source-filter-box">
    <u-row justify="space-between" class="rowBox">
      <u-col span="2" class="colBox" @click="showAddr = true">
        <text class="colText">区域</text>
        <u-icon name="arrow-down-fill" color="#606266" size="20"></u-icon>
      </u-col>
      <u-col
        span="2"
        justify="end"
        class="colBox line"
        @click="showFilter = true"
      >
        <text class="colText">筛选</text>
        <u-icon :name="iconFilter" size="30"></u-icon>
      </u-col>
    </u-row>
    <u-popup
      :show="showFilter"
      :round="10"
      closeable
      @close="showFilter = false"
    >
      <view>
        <text>Filter TODO</text>
      </view>
    </u-popup>
    <u-popup
      :show="showAddr"
      :round="10"
      mode="top"
      closeable
      @close="showAddr = false"
    >
      <view>
        <text>Addr TODO</text>
      </view>
    </u-popup>
  </view>
</template>

<script>
import iconFilter from "@/static/img/common/filter.png";

export default {
  data() {
    return {
      iconFilter,
      showFilter: false,
      showAddr: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.source-filter-box {
  padding: 20rpx 18rpx;
  .rowBox {
    .colBox {
      display: flex;
      flex-direction: row;
      justify-content: center !important;
      align-items: center !important;
      font-size: $uni-font-size-base;
      .colText {
        margin-right: 8rpx;
      }
    }
    .line {
      border-left: 2rpx solid $uni-text-color-placeholder;
    }
  }
}
</style>

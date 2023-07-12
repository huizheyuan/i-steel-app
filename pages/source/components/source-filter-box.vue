<template>
  <view class="source-filter-box-wrap">
    <u-row justify="space-between" class="rowBox">
      <u-col span="2" class="colBox">
        <text class="colText">区域</text>
        <u-icon name="arrow-down-fill" color="#606266" size="20"></u-icon>
      </u-col>
      <u-col
        span="2"
        justify="end"
        class="colBox line"
        @click="$refs.FilterMain.load()"
      >
        <text class="colText">筛选</text>
        <u-icon :name="iconFilter" size="30"></u-icon>
      </u-col>
    </u-row>
    <filter-main ref="FilterMain"></filter-main>
  </view>
</template>

<script>
import iconFilter from "@/static/img/common/filter.png";
import FilterMain from "./source-filter-box-main.vue";

export default {
  components: {
    FilterMain,
  },
  data() {
    return {
      iconFilter,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.source-filter-box-wrap {
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

<template>
  <view class="location-filter-box-wrap">
    <u-row justify="space-between" class="rowBox">
      <u-col span="4" class="colBox" @click="$refs.FilterBoxCity.load()">
        <text class="colText">城市</text>
        <u-icon name="arrow-down-fill" color="#606266" size="20"></u-icon>
      </u-col>
    </u-row>
    <filter-box-city ref="FilterBoxCity"></filter-box-city>
  </view>
</template>

<script>
import FilterBoxCity from "@/components/filter-box/filter-box-city.vue";

export default {
  components: {
    FilterBoxCity,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.location-filter-box-wrap {
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

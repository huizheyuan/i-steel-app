<template>
  <view class="home-tag-sort-wrap">
    <u-popup :show="show" :round="10" mode="top" @close="show = false">
      <view class="popupBox">
        <custom-navbar
          :title="'全部标签'"
          bgColor="#f8f8f8"
          titleColor="#333"
          :autoBack="false"
        >
          <view slot="right" @click="show = false">
            <u-icon name="close" size="36"></u-icon>
          </view>
        </custom-navbar>
        <drag-sort
          :list.sync="list"
          label="name"
          :columnNum="4"
          :columnSpace="20"
          :rowHeight="60"
          :rowSpace="20"
        >
          <view slot="title">
            <text class="title">我的标签</text>
            <text class="tips">编辑拖拽可调整顺序</text>
          </view>
        </drag-sort>
      </view>
    </u-popup>
  </view>
</template>

<script>
import CustomNavbar from "@/components/custom-navbar";
import DragSort from "@/components/drag-sort";

export default {
  components: {
    CustomNavbar,
    DragSort,
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
.home-tag-sort-wrap {
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

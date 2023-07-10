<template>
  <view class="home-tag-sort">
    <u-popup
      :show="show"
      :round="10"
      mode="top"
      closeable
      @close="show = false"
    >
      <view class="tagBox">
        <h4 class="tagTitle center">所有标签页</h4>
        <u-tag
          v-for="(item, index) in list"
          :key="index"
          :text="item.name"
          :closable="item.closable"
          type="info"
          plain
          class="tag"
        >
        </u-tag>
      </view>
      <u-button
        type="info"
        icon="edit-pen"
        shape="circle"
        class="tagBtn center"
        @click="goSort"
      >
        自定义排序
      </u-button>
    </u-popup>
  </view>
</template>

<script>
export default {
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
    goSort() {},
  },
};
</script>

<style lang="scss" scoped>
.home-tag-sort {
  .tagBox {
    padding: 40rpx 20rpx 20rpx;
    background-color: $uni-bg-color-grey;
    .tagTitle {
      margin: 20rpx 0 40rpx;
    }
    .tag {
      width: fit-content;
      display: inline-block;
      margin: 0 10rpx 16rpx;
    }
  }
  .tagBtn {
    width: 50%;
    margin: 20rpx auto;
  }
}
</style>

<template>
  <view class="swiper-search">
    <slot name="left"></slot>
    <view class="searchBox">
      <u-icon
        name="search"
        :color="iconColor"
        :size="iconSize"
        class="searchIcon"
      ></u-icon>
      <swiper
        :current="current"
        :circular="circular"
        :vertical="vertical"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        class="swiperBox"
        @click="click"
      >
        <swiper-item
          v-for="(item, index) in list"
          :key="index"
          class="swiperItem"
        >
          <view>{{ item[keyName] }}</view>
        </swiper-item>
      </swiper>
    </view>
    <slot name="right"></slot>
  </view>
</template>

<script>
export default {
  props: {
    keyName: {
      type: String,
      default: "title",
    },
    iconColor: {
      type: String,
      default: "#2979ff",
    },
    iconSize: {
      type: Number,
      default: 40,
    },
    circular: {
      type: Boolean,
      default: true,
    },
    vertical: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    duration: {
      type: Number,
      default: 1000,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    click() {
      this.$emit("click", this.current);
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-search {
  display: flex;
  align-items: flex-start;
  .searchBox {
    flex: 1;
    display: flex;
    height: 40rpx;
    margin: 20rpx 16rpx;
    padding: 12rpx 24rpx;
    border: 1px solid $uni-border-color;
    border-radius: 40rpx;
    .searchIcon {
      margin-right: 18rpx;
    }
    .swiperBox {
      width: 100%;
      height: 100%;
      flex: 1;
      .swiperItem {
        color: $uni-text-color-placeholder;
        font-size: $uni-font-size-base;
      }
    }
  }
}
</style>

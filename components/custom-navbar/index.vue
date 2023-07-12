<template>
  <view>
    <u-navbar
      :title="title"
      :bgColor="bgColor"
      :titleStyle="{ color: titleColor }"
      leftIconColor="#ffffff"
      leftIconSize="40"
      :autoBack="autoBack"
      style="height: 88rpx"
      @leftClick="leftClick"
    >
      <view slot="right">
        <slot name="right"></slot>
      </view>
    </u-navbar>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "#3c9cff",
    },
    titleColor: {
      type: String,
      default: "#ffffff",
    },
    autoBack: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    leftClick() {
      uni.emit("leftClick");
    },
  },
};
</script>

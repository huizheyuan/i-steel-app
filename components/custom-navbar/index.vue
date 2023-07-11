<template>
  <view>
    <u-navbar
      :title="title"
      bgColor="#3c9cff"
      :titleStyle="{ color: 'white' }"
      leftIconColor="#ffffff"
      leftIconSize="40"
      autoBack
    >
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
  },
  data() {
    return {};
  },
};
</script>

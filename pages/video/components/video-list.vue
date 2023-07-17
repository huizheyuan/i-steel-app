<template>
  <view class="video-list-wrap">
    <u-row customStyle="flex-wrap: wrap;">
      <u-col span="4" v-for="item in dataList" :key="item.id">
        <view class="videoBox">
          <img src="" />
        </view>
      </u-col>
    </u-row>
  </view>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    aaa() {
      console.log(this.dataList);
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.video-list-wrap {
  .videoBox {
    height: 300rpx;
    border: 1px solid $uni-border-color;
  }
}
</style>

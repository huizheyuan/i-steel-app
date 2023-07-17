<template>
  <view>
    <view
      v-for="item in dataList"
      :key="item.id"
      @click="goDetail(item)"
      class="item-li"
    >
      <view>{{ item.title }}</view>
      <view class="new-content">{{ item.content }}</view>
    </view>
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
    goDetail(item) {
      uni.$u.route({
        url: "/pages/source/source-detail",
        params: { id: item.id, title: item.title },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-li {
  font-size: 32upx;
  padding: 32upx;
  border-bottom: 1upx solid #eee;
  .new-content {
    font-size: 28upx;
    margin-top: 10upx;
    margin-left: 20upx;
    color: #666;
  }
}
</style>

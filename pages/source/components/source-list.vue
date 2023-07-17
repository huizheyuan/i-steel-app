<template>
  <view>
    <view class="item-li" v-for="item in dataList" :key="item.id">
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
};
</script>

<style lang="scss" scoped>
/*展示上拉加载的数据列表*/
.item-li {
  font-size: 32upx;
  padding: 32upx;
  border-bottom: 1upx solid #eee;
}
.item-li .new-content {
  font-size: 28upx;
  margin-top: 10upx;
  margin-left: 20upx;
  color: #666;
}
</style>

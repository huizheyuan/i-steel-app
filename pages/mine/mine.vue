<!-- 我的主页面 -->
<template>
  <view class="mine-wrap">
    <u-row justify="space-between" gutter="10" class="userBox">
      <u-col span="4" align="center">
        <u-avatar
          :src="userInfo.avatar"
          :name="userInfo.name"
          size="140"
          shape="square"
        ></u-avatar>
      </u-col>
      <u-col span="6">
        <p class="title bold">{{ userInfo.name || userInfo.telephone }}</p>
        <span class="subTitle">爱钢号：{{ userInfo.account }}</span>
      </u-col>
      <u-col span="2" align="bottom">
        <u-icon size="40" name="arrow-right"></u-icon>
      </u-col>
    </u-row>
    <u-grid :border="true" col="4" @click="clickCard" class="cardBox">
      <u-grid-item v-for="(item, index) in cardList" :key="index">
        <u-icon
          :customStyle="{ paddingTop: 20 + 'rpx' }"
          :name="item.icon"
          :size="22"
        ></u-icon>
        <text>{{ item.title }}</text>
      </u-grid-item>
    </u-grid>
    <u-cell-group class="listBox">
      <u-cell
        v-for="(item, index) in list"
        :key="index"
        :icon="item.icon"
        :title="item.title"
        :value="item.value"
        :label="item.label"
        isLink
        @click="clickList(item)"
      >
      </u-cell>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        id: "32345324523456",
        avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
        account: "3dg2342",
        telephone: "1899999999",
        password: "123456",
        name: "王大强",
      },
      cardList: [
        { title: "我的发布", icon: "checkmark", path: "" },
        { title: "我的关注", icon: "heart", path: "" },
        { title: "我的收藏", icon: "star", path: "" },
        { title: "我的订单", icon: "order", path: "" },
      ],
      list: [
        { title: "浏览记录", icon: "eye", path: "/pages/mine/mine" },
        { title: "关于软件", icon: "info-circle", path: "/pages/mine/mine" },
        { title: "用户协议", icon: "account", path: "/pages/mine/mine" },
        { title: "隐私政策", icon: "lock", path: "/pages/mine/mine" },
        { title: "我的客服", icon: "kefu-ermai", path: "/pages/mine/mine" },
        { title: "设置", icon: "kefu-ermai", path: "/pages/mine/mine" },
      ],
    };
  },
  methods: {
    clickCard(index) {
      const path = this.cardList[index].path;
      uni.navigateTo({ url: path });
    },
    clickList({ path }) {
      uni.navigateTo({ url: path });
    },
  },
};
</script>

<style lang="scss" scoped>
.mine-wrap {
  .userBox {
    padding: 60rpx 20rpx 0;
    .title {
      margin: 10rpx 0;
    }
    .subTitle {
      font-size: 28rpx;
    }
  }
  .cardBox {
    background-color: $uni-bg-color;
    padding: 36rpx 20rpx;
    margin: 30rpx 20rpx;
    border-radius: 10rpx;
  }
  .listBox {
    background-color: $uni-bg-color;
  }
}
</style>

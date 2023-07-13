<!-- 我的主页面 -->
<template>
  <view class="mine-wrap">
    <u-row
      justify="space-between"
      gutter="10"
      class="userBox"
      @click="clickUser"
    >
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
        <u-icon
          size="40"
          name="arrow-right"
          color="color['u-content-color']"
        ></u-icon>
      </u-col>
    </u-row>
    <u-grid :border="true" col="4" @click="clickCard" class="cardBox">
      <u-grid-item v-for="(item, index) in cardList" :key="index">
        <u-icon
          :customStyle="{ paddingTop: 20 + 'rpx' }"
          :name="item.icon"
          :size="50"
        ></u-icon>
        <text class="gridText">{{ item.title }}</text>
      </u-grid-item>
    </u-grid>
    <u-cell-group :border="false" class="listBox">
      <u-cell
        v-for="(item, index) in list"
        :key="index"
        :icon="item.icon"
        :title="item.title"
        :value="item.value"
        :label="item.label"
        :border="!(index === list.length - 1)"
        isLink
        @click="clickList(item)"
      >
      </u-cell>
    </u-cell-group>
  </view>
</template>

<script>
import userAvatar from "@/static/img/temp/user.png";

export default {
  data() {
    return {
      userInfo: {
        id: "32345324523456",
        avatar: userAvatar,
        account: "3dg2342",
        telephone: "1899999999",
        password: "123456",
        name: "废钢侠",
      },
      cardList: [
        {
          title: "我的发布",
          icon: "checkmark",
          path: "/pages/mine/mine-publish",
        },
        { title: "我的关注", icon: "heart", path: "/pages/mine/mine-focus" },
        { title: "我的收藏", icon: "star", path: "/pages/mine/mine-collect" },
        { title: "我的订单", icon: "order", path: "/pages/mine/mine-order" },
      ],
      list: [
        { title: "浏览记录", icon: "eye", path: "" },
        { title: "关于软件", icon: "info-circle", path: "" },
        { title: "用户协议", icon: "account", path: "" },
        { title: "隐私政策", icon: "lock", path: "" },
        { title: "我的客服", icon: "kefu-ermai", path: "" },
        { title: "设置", icon: "kefu-ermai", path: "" },
      ],
    };
  },
  methods: {
    clickUser() {
      uni.$u.route({ url: "/pages/mine/mine-user" });
    },
    clickCard(index) {
      const path = this.cardList[index].path;
      if (!path) return;
      uni.$u.route({ url: path });
    },
    clickList({ path }) {
      if (!path) return;
      uni.$u.route({ url: path });
    },
  },
};
</script>

<style lang="scss" scoped>
.mine-wrap {
  .userBox {
    padding: calc(var(--status-bar-height) + 40rpx) 20rpx 60rpx;
    background-color: $uni-color-primary;
    box-shadow: 2px 2px 10px $uni-color-primary;
    color: $uni-text-color-inverse;
    .title {
      margin: 18rpx 0;
      font-size: $uni-font-size-lg;
    }
    .subTitle {
      font-size: $uni-font-size-base;
    }
  }
  .cardBox {
    background-color: $uni-bg-color;
    padding: 36rpx 20rpx;
    margin: 30rpx 20rpx;
    border-radius: 10rpx;
    .gridText {
      font-size: $uni-font-size-sm;
    }
  }
  .listBox {
    background-color: $uni-bg-color;
    border-radius: 10rpx;
    margin: 20rpx 20rpx;
    padding: 18rpx 20rpx;
  }
}
</style>

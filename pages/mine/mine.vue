<!-- 我的主页面 -->
<template>
  <view>
    <u-row justify="space-between" gutter="10">
      <u-col span="4" align="center">
        <u-avatar
          :src="userInfo.avatar"
          :name="userInfo.name"
          size="140"
          shape="square"
        ></u-avatar>
      </u-col>
      <u-col span="6">
        <p>{{ userInfo.name || userInfo.telephone }}</p>
        <span>爱钢号：{{ userInfo.account }}</span>
      </u-col>
      <u-col span="2" align="bottom">
        <u-icon size="40" name="arrow-right"></u-icon>
      </u-col>
    </u-row>
    <u-grid :border="false" col="4" @click="clickCard">
      <u-grid-item v-for="(item, index) in cardList" :key="index">
        <u-icon
          :customStyle="{ paddingTop: 20 + 'rpx' }"
          :name="item.icon"
          :size="22"
        ></u-icon>
        <text class="grid-text">{{ item.title }}</text>
      </u-grid-item>
    </u-grid>
    <u-cell-group>
      <u-cell
        v-for="(item, index) in list"
        :key="index"
        :icon="item.icon"
        :title="item.title"
        :value="item.value"
        :label="item.label"
        isLink
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
        { title: "我的发布", name: "publish", icon: "checkmark" },
        { title: "我的关注", name: "focus", icon: "heart" },
        { title: "我的收藏", name: "collect", icon: "star" },
        { title: "我的订单", name: "order", icon: "order" },
      ],
      list: [
        { title: "浏览记录", icon: "eye", value: "", label: "" },
        { title: "关于软件", icon: "info-circle", value: "", label: "" },
        { title: "用户协议", icon: "account", value: "", label: "" },
        { title: "隐私政策", icon: "lock", value: "", label: "" },
        { title: "我的客服", icon: "kefu-ermai", value: "", label: "" },
        { title: "设置", icon: "kefu-ermai", value: "", label: "" },
      ],
    };
  },
  methods: {
    clickCard(name) {
      console.log(name);
    },
  },
};
</script>

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
      </u-col>
      <u-col span="2" align="bottom">
        <u-icon size="40" name="arrow-right"></u-icon>
      </u-col>
    </u-row>
    <u-row justify="center" gutter="10">
      <u-col span="3" align="center">订单</u-col>
      <u-col span="3" align="center">关注</u-col>
      <u-col span="3" align="center">收藏</u-col>
      <u-col span="3" align="center">发布</u-col>
    </u-row>
    <u-cell-group>
      <u-cell
        v-for="item in list"
        :key="item.id"
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
        telephone: "1899999999",
        password: "123456",
        name: "王大强",
      },
      list: [
        { id: 1, title: "浏览记录", icon: "eye", value: "", label: "" },
        { id: 2, title: "关于软件", icon: "info-circle", value: "", label: "" },
        { id: 3, title: "用户协议", icon: "account", value: "", label: "" },
        { id: 4, title: "隐私政策", icon: "lock", value: "", label: "" },
        { id: 5, title: "我的客服", icon: "kefu-ermai", value: "", label: "" },
      ],
    };
  },
};
</script>

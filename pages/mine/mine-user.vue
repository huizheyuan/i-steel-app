<!-- 用户信息 -->
<template>
  <view>
    <u-cell-group>
      <u-cell title="头像" isLink>
        <view slot="value">
          <u-avatar
            :src="userInfo.avatar"
            :name="userInfo.name"
            size="140"
            shape="square"
          ></u-avatar>
        </view>
      </u-cell>
      <u-cell title="爱钢号" :value="userInfo.account" isLink></u-cell>
      <u-cell title="手机号" :value="userInfo.telephone" isLink></u-cell>
      <u-cell title="用户名" :value="userInfo.name" isLink></u-cell>
      <u-cell title="修改密码" isLink></u-cell>
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
    };
  },
};
</script>

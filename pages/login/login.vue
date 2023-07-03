<!-- 登录 -->
<template>
  <view>
    <u-form labelPosition="left" :model="model" :rules="rules" ref="uForm">
      <u-form-item prop="phone">
        <u-input
          v-model="model.phone"
          prefixIcon="phone"
          :prefixIconStyle="prefixIconStyle"
          placeholder="请输入手机号"
        ></u-input>
      </u-form-item>
      <u-form-item prop="pwd" v-if="loginType">
        <u-input
          v-model="model.pwd"
          prefixIcon="lock"
          :prefixIconStyle="prefixIconStyle"
          placeholder="请输入密码"
        ></u-input>
      </u-form-item>
      <u-form-item prop="code" v-else>
        <u-input
          v-model="model.code"
          prefixIcon="integral"
          :prefixIconStyle="prefixIconStyle"
          placeholder="请输入验证码"
        >
          <template slot="suffix">
            <u-code
              ref="uCode"
              @change="(text) => (tips = text)"
              seconds="20"
              changeText="X秒重新获取"
            ></u-code>
            <u-button
              @tap="getCode"
              :text="tips"
              type="ino"
              size="mini"
            ></u-button>
          </template>
        </u-input>
      </u-form-item>
      <view>
        <!-- <text @click="forgetPass">找回密码</text> -->
        <text @click="switchLoginType" style="float: right; font-size: 30rpx">
          {{ loginType === true ? "密码登录" : "验证码登录" }}
        </text>
      </view>
    </u-form>
    <u-button @click="submit">登录</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loginType: true,
      prefixIconStyle: `font-size: 22px;color: #909399`,
      model: {
        phone: "",
        pwd: "",
        code: "",
      },
      tips: "",
      rules: {
        phone: {
          type: "string",
          required: true,
          message: "请输入手机号",
          trigger: ["blur", "change"],
        },
      },
    };
  },
  methods: {
    forgetPass() {
      // this.$u.route('/pages/login/forgetPass');
    },
    switchLoginType() {
      this.loginType = !this.loginType;
      this.$refs.uForm.resetFields();
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        // 模拟向后端请求验证码
        uni.showLoading({
          title: "正在获取验证码",
        });
        setTimeout(() => {
          uni.hideLoading();
          // 这里此提示会被this.start()方法中的提示覆盖
          uni.$u.toast("验证码已发送");
          // 通知验证码组件内部开始倒计时
          this.$refs.uCode.start();
        }, 10000);
      } else {
        uni.$u.toast("倒计时结束后再发送");
      }
    },
    submit() {
      //   this.$refs.uForm.validateField("sex");
    },
  },
  onReady() {
    //如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
    this.$refs.uForm.setRules(this.rules);
  },
};
</script>
